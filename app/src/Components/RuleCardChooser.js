import React, { useState } from 'react';
import RuleCard from './RuleCard';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
dayjs.extend(dayOfYear);

const ruleOfTheDayApiEndpoint = 'https://rule-of-the-day-api.azurewebsites.net/api/rotd';

const GetRandomRuleForLife = (date, cb) => {
  fetch(ruleOfTheDayApiEndpoint, {mode: 'cors', credentials: 'omit'})
    .then(res => res.json())
    .then(json => cb(null, json))
    .catch(err => cb(err));
}

const RuleCardChooser = () => {
  const now = dayjs();
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date] = useState(now.format('MMMM D, YYYY'));
  const [rule, setRule] = useState('');
  const [ruleNumber, setRuleNumber] = useState(0);
  const [quote, setQuote] = useState('');
  const updateLoading = () => setLoading(error != null && rule.length === 0 && ruleNumber === 0);
  if (refresh) {
    setRefresh(false);
    GetRandomRuleForLife(now, (err, ruleForLife) => {
      if (err) {
        setError(err);
        console.error(err);
        updateLoading();
        return;
      }
      setRule(ruleForLife.text);
      setRuleNumber(ruleForLife.number);
      if (ruleForLife.quotes.length > 0) {
        setQuote(ruleForLife.quotes[0]);
      }
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
    />
  );
};

export default RuleCardChooser;
