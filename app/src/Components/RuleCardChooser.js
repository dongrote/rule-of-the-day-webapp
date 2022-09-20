import React from 'react';
import RuleCard from './RuleCard';
import RulesForLife from '../data';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import Prando from 'prando';
dayjs.extend(dayOfYear);

const ChooseIndexByDate = (date, max) => {
  // seed prng with the current year
  const prng = new Prando(date.year());
  // skip iterations by day number of the year
  prng.skip(date.dayOfYear());
  return prng.nextInt(0, max);
};

const GetRandomRuleForLife = date => RulesForLife[ChooseIndexByDate(date, RulesForLife.length)];

const RuleCardChooser = () => {
  const now = dayjs();
  const ruleForLife = GetRandomRuleForLife(now);
  return (
    <RuleCard
      date={now.format('MMMM D, YYYY')}
      ruleText={ruleForLife.text}
      ruleNumber={ruleForLife.number}
      description={ruleForLife.description}
    />
  );
};

export default RuleCardChooser;
