import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [message, setMessage] = useState("");
  const [income, setIncome] = useState(0);
  const [rentMortgage, setRentMortgage] = useState(0);
  const [water, setWater] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [internet, setInternet] = useState(0);
  const [phone, setPhone] = useState(0);
  const [healthInsurance, setHealthInsurance] = useState(0);
  const [autoInsurance, setAutoInsurance] = useState(0);
  const [homeInsurance, setHomeInsurance] = useState(0);
  const [carPayment, setCarPayment] = useState(0);
  const [gas, setGas] = useState(0);
  const [childcare, setChildCare] = useState(0);
  const [studentLoans, setStudentLoans] = useState(0);
  const [subscriptions, setSubscriptions] = useState(0);
  const [memberships, setMemberships] = useState(0);

  useEffect(() => {
  axios.get("http://127.0.0.1:8000/api/message/")
    .then(res => setMessage(res.data.message))
    .catch(err => console.error(err));
  }, []);

  function handleSubmit() {
    event.preventDefault();
    console.log("Budget Form Submitted");
    console.log("Income: " + income);
    console.log("Income After Rent/Mortgage: " + (income-rentMortgage));
    console.log("Water " + water);
    console.log("Memberships " + memberships);


    axios.post("http://127.0.0.1:8000/api/calculate/", {
        income: Number(income),
        rentMortgage: Number(rentMortgage)
      })
      .then(res => {
        setMessage(res.data.message);
        console.log(res.data);
      })
      .catch(err => console.error(err));

  }
   const handleIncome = (event) => {
      setIncome(event.target.value);
  };
   const handelRentMortgage = (event) => {
      setRentMortgage(event.target.value);
  };
  const handleWater = (event) => {
    setWater(event.target.value);
  }
  const handleElectricity = (event) => {
    setElectricity(event.target.value);
  }
  const handleInternet = (event) => {
    setInternet(event.target.value);
  }
  const handlePhone = (event) => {
    setPhone(event.target.value);
  }
  const handleHealthInsurance = (event) => {
    setHealthInsurance(event.target.value);
  }
  const handleAutoInsurance = (event) => {
    setAutoInsurance(event.target.value);
  }
  const handleHomeInsurance = (event) => {
    setHomeInsurance(event.target.value);
  }
  const handleCarPayment = (event) => {
    setCarPayment(event.target.value);
  }
  const handleGas = (event) => {
    setGas(event.target.value);
  }
  const handleChildCare = (event) => {
    setChildCare(event.target.value);
  }
  const handleStudentLoans = (event) => {
    setStudentLoans(event.target.value);
  }
  const handleSubscriptions = (event) => {
    setSubscriptions(event.target.value);
  }
  
  const handleMemberships = (event) => {
    setMemberships(event.target.value);
  }


  return (
    <>
      <h1 className="p-5">Budget Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-blue-50 pb-5">
          <p className="text-2xl text-left bg-blue-100 pl-3 pt-2 pb-2">
            Income
          </p>
          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Salary/Earned Income</label>
            </div>
            <div className="row-span-2 ">
              <div className="flex outline-1 outline-gray-300 bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>

                <input
                  type="number"
                  id="income"
                  name="income"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleIncome}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 pb-5">
          <p className="text-2xl text-left bg-blue-100  pl-2 pt-2 pb-2 pr-4">
            Housing and Utilities
          </p>

          <div className=" input-div">
            <div className="row-span-2 text-left">
              <label>Rent or Mortgage</label>
            </div>
            <div className="row-span-2 ">
              <div className="flex outline-1 outline-gray-300  bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>

                <input
                  type="number"
                  id="rent_mortgage"
                  name="rent_mortgage"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handelRentMortgage}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className=" input-div">
            <div className="row-span-2 text-left">
              <label>Water</label>
            </div>
            <div className="row-span-2 ">
              <div className="flex outline-1 outline-gray-300  bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="water"
                  name="water"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleWater}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className=" input-div ">
            <div className="row-span-2 text-left">
              <label>Electricity</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300  bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>

                <input
                  type="number"
                  id="electricity"
                  name="electricity"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleElectricity}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className=" input-div ">
            <div className="row-span-2 text-left">
              <label>Internet</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300  bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>

                <input
                  type="number"
                  id="internet"
                  name="internet"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleInternet}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className=" input-div ">
            <div className="row-span-2 text-left">
              <label>Phone</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300  bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>

                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handlePhone}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 pb-5">
          <p className="text-2xl text-left bg-blue-100 pl-3 pt-2 pb-2">
            Insurance
          </p>
          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Health Insurance</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300 bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="health_insurance"
                  name="health_insurance"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleHealthInsurance}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Auto Insurance</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300 bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="auto_insurance"
                  name="auto_insurance"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleAutoInsurance}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Home Insurance</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300 bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="home_insurance"
                  name="home_insurance"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleHomeInsurance}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 pb-5">
          <p className="text-2xl text-left bg-blue-100 pl-3 pt-2 pb-2">
            Transportation
          </p>

          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Car Payment</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300 bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="car_payment"
                  name="car_payment"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleCarPayment}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Gas</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300 bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="loan_payment"
                  name="loan_payment"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleGas}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 pb-5">
          <p className="text-2xl text-left bg-blue-100 pl-3 pt-2 pb-2">
            Childcare and Education
          </p>
          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Childcare</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300 bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="childcare"
                  name="childcare"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleChildCare}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Student Loans</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300 bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="student_loans"
                  name="student_sloans"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleStudentLoans}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 pb-5">
          <p className="text-2xl text-left bg-blue-100 pl-3 pt-2 pb-2">
            Miscellaneous
          </p>

          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Subscriptions</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300 bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="subscriptions"
                  name="subscriptions"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleSubscriptions}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Memberships</label>
            </div>
            <div className="row-span-2">
              <div className="flex outline-1 outline-gray-300 bg-white">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="memberships"
                  name="memberships"
                  placeholder="0.00"
                  step="0.01"
                  onChange={handleMemberships}
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <button type="submit">Get Budget</button>
        </div>
      </form>
    </>
  );
}

export default App;
