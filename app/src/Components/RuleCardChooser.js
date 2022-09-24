import React, { useState } from 'react';
import RuleCard from './RuleCard';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
dayjs.extend(dayOfYear);

const dateFormatString = 'YYYY-MM-DD';

const ruleOfTheDayApiEndpoint = 'https://rule-of-the-day-api.azurewebsites.net/api/rotd';

const GetRandomRuleForLife = (date, cb) => {
  fetch(`${ruleOfTheDayApiEndpoint}?date=${date}`, {mode: 'cors', credentials: 'omit'})
    .then(res => res.json())
    .then(json => cb(null, json))
    .catch(err => cb(err));
}


const RuleCardChooser = () => {
  const now = dayjs();
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(now.format(dateFormatString));
  const [rule, setRule] = useState('');
  const [ruleNumber, setRuleNumber] = useState(0);
  const [quote, setQuote] = useState('');
  const updateLoading = () => setLoading(error != null && rule.length === 0 && ruleNumber === 0);
  const updateRuleCard = ruleForLife => {
    setRule(ruleForLife.text);
    setRuleNumber(ruleForLife.number);
    if (ruleForLife.quotes.length > 0) {
      setQuote(ruleForLife.quotes[0]);
    }
  };
  const previousDate = () => {
    var previousDay = dayjs(date).subtract(1, 'day');
    setDate(previousDay.format(dateFormatString))
    setRefresh(true);
  };
  const nextDate = () => {
    var nextDay = dayjs(date).add(1, 'day');
    setDate(nextDay.format(dateFormatString));
    setRefresh(true);
  };
  if (refresh) {
    setRefresh(false);
    setLoading(true);
    GetRandomRuleForLife(date, (err, ruleForLife) => {
      if (err) {
        setError(err);
        console.error(err);
        updateLoading();
        return;
      }
      updateRuleCard(ruleForLife);
      updateLoading();
    });
  }
  return (
    <RuleCard
      loading={loading}
      error={error}
      date={date}
      ruleText={rule}
      ruleNumber={ruleNumber}
      description={quote}
      onAdvanceDate={() => nextDate()}
      onPreviousDate={() => previousDate()}
    />
  );
};

export default RuleCardChooser;
