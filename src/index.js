// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency>10000)
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    if (currency<=0)
    return {};
   
    var result = {
        'H' : 0,
        'Q' : 0,
        'D' : 0,
        'N' : 0,
        'P' : 0
    };

    var h = Math.floor(currency/50);    
    currency-=h*50;
    var q = Math.floor(currency/25);   
    currency-=q*25;
    var d = Math.floor(currency/10);    
    currency-=d*10;
    var n = Math.floor(currency/5);
    currency-=n*5;
    var p = Math.floor(currency/1);

    if (h!=0){
        result["H"] = h;
    }
    else delete result["H"];
    
    if (q!=0){
        result["Q"] = q;
    }
    else delete result["Q"];

    if (d!=0){
        result["D"] = d;
    }
    else delete result["D"];

    if (n!=0){
        result["N"] = n;
    }
    else delete result["N"];

    if (p!=0){
        result["P"] = p;
    }
    else delete result["P"];

    return result;
}
