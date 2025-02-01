import React from "react";

export default function Wip({ setPage }) {
  return (
    <div className="flex flex-col items-center mt-[40px] mb-[100px]">
      <img
        className="w-[150px] h-[150px]"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFzklEQVR4nO2dW2gcVRiAT8AriNZLbb2gonhBwQuFJs3+/4yiYBE0Jnv+TaxCX7QvDYqKCFJMwAd9FlQ0IvhQQUF8EZ8KXtB6obakJtn/3zSk3q+NmqrU68qZJG26TXdndmZ2zuyeD37IQ5iz8+XfM/+cW5RyOBwOh8PhcKTEnTdPnU0omwlkTIN8QiDfaJQ5DfIbAX9JwDsJ+XnyKpu2rNt1Ylqfo22hAgMBv04gfxNKNUSMZv2Zc8XAhsmLNcobIeU6yc1AUNYE/LOTnCLklR/QyP9GkayBR9L8TG0HAT8YMYud5KgUkfuiZrJ78EWEeibOIuTvXSanDKE86zI5ZTbB3jMJ+XfXJ6cMIW91fXIL0CCvhhXd71cuTLr9jnld1ygSOqOB70m0beARDTKkOgGNMhdetIwl1a4pDRev+4zqBDTyr6EfhMj7EmkTeOTINeV91QkQ8HSk0q4wc1HM9h6tueZ+1QkQyluRRMfop5dn8rLu6KDqBDTKtmiim+unV8jkpa5jTmVNCcULZjSCyiD8S0WUhwz1yvWRXr2b6KcJ+PHjX5O/Ulkx6JcvIZQdEcUujx2+//YJYdsjlPEo1y8CX5uM5GD0712VBVSQfkKZb1oySMUMEoVtr4jl3qbaMw9RkBdNn009ckEzkhdFP6daS7Vrobbk/2JkctXM8YVtsQRciPVHPVb82JL4MJKD8LikWgX5E6cFE6BJ3DDK+F0+n5NaJicZwIfuXl85vSWSB7zJywl5MuGbGCeorA75Zpal6O0tkVzC8q2RXoExfGjgKfIn1taVDfxElqKLXuWGlBVXu4K6EvifdDNG9jbMbJAns5BsRg1TVbzZnz2FkF9u2U2BlPtx6jzLMvvAUPfMmlQXpRDyngyy57P+DfvOtSKzzbfYK9+RmuSiJ6iBv2u1ZLIts0HuT00ygWzRKH9lJhkPB2cm22RyWpI3bqycTMgvWSC4eiR4slH/mHg3AvJtyZPbUpE8CFNXEPDH2YuVFWU3Lv2OK3s+7NhIsKQX+ek+f3ZViqNu/Ev2QiVmnX2M7PmlV/xSQa4jkMcI+E3T/xPIT8EzKPiZt5vukm6ZOUOlxYDPV9kumZbCSAkv+7BkKyDg9zIXiNFkN3xAmtd1myQXQbozF4fRw0wsDPWWz1d5IRiftUAcNRecG9mRZ5TtC86FbDO+aoGsaqwIZmhWnjGxBjN1nrko7ADZ5quXuSTsANka+YXMBWFyoUFmzYy8so2SV74pazmUeGbzdBrLdWNDyO+0o2yyrRsZALk0rXlAylb2brp64iRlE8VC+caFkSsLBGGSwVuVbSyumzvYZlm9U9mIWaQSZaF3DmJe2QpBeZ2Z9bVAUjVumKRRNkMo65s4LaBqW2jkD5XttElmD6s8YBZ9a5AfLRBWjR68x7ryrh5mETch/5A7yT2WvbCEoViYvibTxTQYIkxpGhxIJcO5yuRaqLd8pUb5OnOhmMPqol1k6zxUF00tRDfnxlkgmPJWXTQzEEXIn1sguJq76qKWRlt7zQC7GWjPXHJPDquLo09DDAaYRhv9McyGyVRlAh8ikPsI5INgOLddqovaLWYa5al6v2+WaKWweajathVFTSbX3nDdzDZrKyilid62qyjqSA4lm/yJtcGKz+RlD3eS5HCZ3T2zxuw/SfRhl+d+uHYBesQ5w/qZDZXVUTfFt2VFcTTVLg38aRMiRhsekg28O4TMGY18rzk+JxiSbZeKopaiJwMxsm608bGWsqv+g062qU6AUF6L+RWvK7vPn121mKGxz+jINQmNWTTI7C9ODc4mCpYI8x+LG0Qf6ZiD+gyE8mdCFcJo1vdiNQmuUJqPe+xZWxP824wEJJvXduVI9bARJzkMZhtZs2vuFv5xTMUP1ZBDKe3Jwy6TW0RwWlb4bD7g+uQYEPBDjboRM2Q52Fu5LE47jqVB/OD8N/7IbEpf3B63XyO/UipUbjdjI06Uw+FwOBwOh8qY/wEBuLEQ759RpAAAAABJRU5ErkJggg=="
        alt="work"
      ></img>
      <div className="text-center text-2xl text-oyoya-purple w-[80%] my-[20px]">
        <h1 className="text-4xl font-maru font-extrabold text-oyoya-purple my-[20px]">
          Work in progress
        </h1>
        <p>Stiamo lavorando per voi! Presto questa pagina sarà disponibile.</p>
        <p>Rimani connesso per non perderti tutte le novità!</p>
      </div>
      <button onClick={() => setPage("home")} className="bg-oyoya-purple  h-[60px] w-[250px] mt-[20px] rounded-lg text-2xl text-white font-maru">
        Torna alla home
      </button>
    </div>
  );
}
