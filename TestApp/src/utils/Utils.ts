
export function checkIfValidName(str: string) : boolean{
    const nameRegex: RegExp = new RegExp('^[a-z]+$', 'i')
    return nameRegex.test(str);
    
}

export function checkIfValidEmail(str: string) : boolean {
    const emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailRegex: RegExp = new RegExp(emailPattern);
    return emailRegex.test(str);
}