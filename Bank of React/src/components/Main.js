import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import RangeSlider from "./RangeSlider";
import { Box, InputLabel, FormControl, Select, MenuItem } from "@mui/material";

const Main = () => {
  const [homeValue, setHomeValue] = useState(3000);
  const [downPayment, setDownPayment] = useState(600);
  const [loanAmount, setLoanAmount] = useState(2400);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(5);

  const [interest, setInterest] = useState(317.458);
  const [monthlyPay, setMonthlyPay] = useState(45.29);

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      homeValue,
      interest,
    });
  }, [homeValue, interest]);

  // const [monthlyPay, setMonthlyPay] = useState({
  //   homeValue,
  //   downPayment,
  //   loanAmount,
  //   interestRate,
  //   loanTerm,
  // });

  // const onChartChange = () => {
  //   setMonthlyPay({
  //     homeValue,
  //     downPayment,
  //     loanAmount,
  //     interestRate,
  //     loanTerm,
  //   });
  // };

  // const calMonthlyPay = (loanAmt, annualInterestRate, tanure) => {
  //   const monthlyIntRate = annualInterestRate / 12 / 100;
  //   const totalPaymet =tanure*12;
  // };

  const calculateMonthlyPayment = (
    loanAmount,
    annualInterestRate,
    loanTenureYears
  ) => {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const totalPayments = loanTenureYears * 12;
    const numerator =
      loanAmount *
      monthlyInterestRate *
      (1 + monthlyInterestRate) ** totalPayments;
    // Math.pow(1 + monthlyInterestRate, totalPayments);
    // const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;

    const denominator = (1 + monthlyInterestRate) ** totalPayments - 1;
    const monthPayes = numerator / denominator;
    const monthlyPayment = (numerator / denominator).toFixed(2);
    const totalPayableAmount = monthPayes * totalPayments;
    const totalInterestAmount = (totalPayableAmount - loanAmount).toFixed(3);
    // console.log(totalInterestAmount);
    setInterest(totalInterestAmount);
    // console.log(interest);
    // console.log(monthlyPayment);

    return monthlyPayment;
  };

  const onChangeHomeHandler = (val) => {
    // console.log(val);
    setHomeValue(val);
    const newdownPayment = (val * 20) / 100;

    setDownPayment(newdownPayment);
    const newLoanAmount = val - newdownPayment;
    setLoanAmount(newLoanAmount);

    const res = calculateMonthlyPayment(newLoanAmount, interestRate, loanTerm);
    setMonthlyPay(res);
    // setMonthlyPay({ homeValue: val });
  };

  const onDownPayment = (val) => {
    // console.log("down payment");

    setDownPayment(val);
    const newLoanAm = homeValue - val;
    setLoanAmount(newLoanAm);
    const res = calculateMonthlyPayment(newLoanAm, interestRate, loanTerm);
    setMonthlyPay(res);
    // setMonthlyPay({ downPayment: val });
  };
  const onLoanChangeHandler = (val) => {
    // console.log("loanchange");
    setLoanAmount(val);
    const newDownpay = homeValue - val;
    setDownPayment(newDownpay);
    const res = calculateMonthlyPayment(val, interestRate, loanTerm);
    setMonthlyPay(res);
    // setMonthlyPay({ loanAmount: val });
  };
  const onInterestChangeHandler = (val) => {
    // console.log("on interest");
    setInterestRate(val);
    const res = calculateMonthlyPayment(loanAmount, val, loanTerm);
    setMonthlyPay(res);
    // setMonthlyPay({ interestRate: val });
  };

  const tenureHandleChange = (e) => {
    // console.log(e.target.value);
    setLoanTerm(e.target.value);
    const res = calculateMonthlyPayment(
      loanAmount,
      interestRate,
      e.target.value
    );
    setMonthlyPay(res);
  };

  return (
    <div className="main">
      <div className="mainLeft ">
        <RangeSlider
          title="Home Value"
          amount={homeValue}
          minVal="1000"
          maxVal="10000"
          minStep="100"
          isPercentage={false}
          onChangeFun={onChangeHomeHandler}
        />
        <RangeSlider
          title="Down Payment"
          amount={downPayment}
          minVal="0"
          minStep="100"
          maxVal="3000"
          isPercentage={false}
          onChangeFun={onDownPayment}
        />
        <RangeSlider
          title="Loan Amount"
          amount={loanAmount}
          minVal="0"
          maxVal="3000"
          minStep="100"
          isPercentage={false}
          onChangeFun={onLoanChangeHandler}
        />
        <RangeSlider
          title="Interest Rate"
          amount={interestRate}
          minVal="2"
          maxVal="18"
          minStep="1"
          isPercentage={true}
          onChangeFun={onInterestChangeHandler}
        />
        <div className="select">
          <Box sx={{ minWidth: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={loanTerm}
                label="Tenure"
                onChange={tenureHandleChange}
              >
                <MenuItem value={5}>5 years</MenuItem>
                <MenuItem value={10}>10 years</MenuItem>
                <MenuItem value={15}>15 years</MenuItem>
                <MenuItem value={20}>20 years</MenuItem>
                <MenuItem value={25}>25 years</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <Chart monthlyPay={monthlyPay} dataVal={data} />
    </div>
  );
};

export default Main;
