function myParseFloat(string, radix) {
 if (radix!==undefined && (typeof radix !== 'number'|| radix<2 || radix>36)) {
        return NaN;
    }
    radix = radix || 10;
    if (string === null) return NaN;
    string = string.trim();
    if (string === '') return NaN;

    const digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = 0;
    let idx = 0;
    let negative = false;
    let hasDecimal = false;
    let decimalPlace = 1;

    
    if(string[0]==='-'){
        negative = true;
        idx++}

     if(string[0]==='+'){
        idx++}

   
    for (let idx=0;idx<string.length;idx++){
        const char = string[idx];
        if (char==='.'){
            if(hasDecimal){
                return NaN;
            }
            hasDecimal = true;
            continue; 
        }
     
        const value = digits.indexOf(char);
        if (value===-1 || value>=radix){
            break;}

        if (hasDecimal){
            result+=value/Math.pow(radix,decimalPlace);
            decimalPlace++;
        } 
    else {result = result * radix + value}
 }
return negative? -result:result;
}
myParseFloat('12.567px');
