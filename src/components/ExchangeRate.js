const ExchangeRate = ({exchangedData}) => {
    return (
        <div className="exchange-rate">
            <h3 className="makedef" >Exchange Rate</h3>
            <h1 className="makedef">{exchangedData.exchangeRate}</h1>
            <p className="makedef">{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
        </div>
    )
}

export default ExchangeRate