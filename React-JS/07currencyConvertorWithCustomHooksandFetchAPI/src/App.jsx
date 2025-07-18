import { useState } from "react";
import "./App.css";
// now we import [inputbox]
import { InputBox } from "./components";
// now we import our custom hook
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  // now we set our states bcz we pass many states in our [InputBox]

  // we make them on by one

  // 1st is amount

  const [amount, setAmount] = useState(0);

  // now we have 2 more values which we use in our [Inputbox] which are [from] value and [to] value

  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");

  // now also convert them to show the value that after conversion what value comes for this we also take a [text] so for this we also use [useState]

  const [convertedAmount, setConvertedAmount] = useState(0);

  // now we come to our Hook how to use our [hook] and in our hook what we want  our hook want a currency and the currency comes from the state of [from] bcz we take value [from] not [to] bcz [to] is used to show converted value show ,that's why we pass [from] and now it do not crash bcz bydefault it take [inr] in [from]
  // when we give[from] to our hook it will return [data] which we return in our [Hook] now we have values in form of we type of [object] in our varaible [currencyInfo]

  // now our currencyInfo take all keys from our hook 🔻

  const currencyInfo = useCurrencyInfo(from);

  // now the most instersting thing is that in our [useCurrencyInfo] hook we aslo take [data] too now we rembeber that the [data] comes in what formate ? our API data comes in form of [object] now we know object have [keys and values] then we give [options value] to user is [key] not give [value] bcz we give [key] bcz it is our requirement and to do this what we can do ?

  // is we have any concpet in which we take all keys from Objet the answer is yes let see how 🔻

  // we have option of [object.keys] by this we get all keys and from where we get all keys for this we pass our [currencyinfo] . bcz it is that retun [Data] in our [custom Hook]

  // now when we pass [currencyInfo] it we get all keys

  // now I hold all keys in a variable

  const options = Object.keys(currencyInfo);
  // now we know in our Input component we have [currency options] value and this is basically options of select box field🔺

  // now we discus of funcationality which is [swap]

  // in this swap [to] to [from] and vise versa

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // now when user Click on COnvert then what will happend ? bcz in this we see what your ask mean from value to what value we multiply value
  // this is main state that show us final result to us

  const convert = () => {
    // in this we multiply our ammount to our currencyInfo[to] bcz we know in our API we have many Keys means [inr,usd,pkr etc] all these values are avalaible in [currencyInfo] we know and in this we use [to] rather then [from] bcz we know in what we convert we take it from [to]
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // now our funcationality complet here

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
        <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/32977020/pexels-photo-32977020.jpeg')`,
          }}
        >
          <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // when we submit form we want to convert value for this we call convert fn() which we define in above
                  convert();
                }}
              >
                <div className="w-full mb-1">
                  <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    selectCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}
                  />
                </div>
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}
                  >
                    swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    // kuch b pass krny ka mtlb [true pass] kr rhy ho mean yhn py amountDisable = true likhny ki zarorat ni h
                    amountDisable
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
