import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleSubmit() {
    console.log("Budget Form Submitted");
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
              <div class="flex outline-1 outline-gray-300 bg-white">
                <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>

                <input
                  type="number"
                  id="income"
                  name="income"
                  placeholder="0.00"
                  step="0.01"
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
              <div class="flex outline-1 outline-gray-300  bg-white">
                <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>

                <input
                  type="number"
                  id="rent_mortgage"
                  name="rent_mortgage"
                  placeholder="0.00"
                  step="0.01"
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
              <div class="flex outline-1 outline-gray-300  bg-white">
                <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  type="number"
                  id="water"
                  name="water"
                  placeholder="0.00"
                  step="0.01"
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
              <div class="flex outline-1 outline-gray-300  bg-white">
                <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>

                <input
                  type="number"
                  id="electricity"
                  name="electricity"
                  placeholder="0.00"
                  step="0.01"
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
              <div class="flex outline-1 outline-gray-300  bg-white">
                <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>

                <input
                  type="number"
                  id="internet"
                  name="internet"
                  placeholder="0.00"
                  step="0.01"
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
              <div class="flex outline-1 outline-gray-300  bg-white">
                <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>

                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="0.00"
                  step="0.01"
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Health Insurance */}

        <div className="bg-blue-50 pb-5">
          <p className="text-2xl text-left bg-blue-100 pl-3 pt-2 pb-2">
            Income
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
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Auto Insurance */}
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
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Home Insurance */}
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

          {/* Car Payment */}
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
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Loan Payment */}
          <div className="input-div">
            <div className="row-span-2 text-left">
              <label>Loan Payment</label>
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
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Childcare and Education */}

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
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
          {/* Student Loans */}
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
                  id="student-loans"
                  name="student-loans"
                  placeholder="0.00"
                  step="0.01"
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

          {/* Subscriptions */}
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
                  className="grow pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Memberships */}
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
