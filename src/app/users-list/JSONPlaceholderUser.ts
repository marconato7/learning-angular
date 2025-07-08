// https://jsonplaceholder.typicode.com/users
class JSONPlaceholderUser
{
    private _id:       string;
    private _username: string;
    // name:     string;
    // email:    string;
    // phone:    string;
    // website:  string;

    constructor(id: string, username: string)
    {
        this._id       = id;
        this._username = username;
    }

    public static create(id: string, username: string): JSONPlaceholderUser
    {
        return new this(id, username);
    }

    public toDto(id: string, username: string): JSONPlaceholderUserDto
    {
        return JSONPlaceholderUserDto.create(id, username);
    }

    // address: {
    //     street: Kulas Light;
    //     suite: Apt. 556;
    //     city: Gwenborough;
    //     zipcode: 92998-3874;
    //     geo: {
    //         lat: -37.3159;
    //         lng: 81.1496;
    //     };
    // };

    // company: {
    //     name: Romaguera-Crona;
    //     catchPhrase: Multi-layered client-server neural-net;
    //     bs: harness real-time e-markets;
    // };
}

class JSONPlaceholderUserDto
{
    private _id:       string;
    private _username: string;
    // name:     string;
    // email:    string;
    // phone:    string;
    // website:  string;

    constructor(id: string, username: string)
    {
        this._id       = id;
        this._username = username;
    }

    public static create(id: string, username: string): JSONPlaceholderUserDto
    {
        return new this(id, username);
    }

    // address: {
    //     street: Kulas Light;
    //     suite: Apt. 556;
    //     city: Gwenborough;
    //     zipcode: 92998-3874;
    //     geo: {
    //         lat: -37.3159;
    //         lng: 81.1496;
    //     };
    // };

    // company: {
    //     name: Romaguera-Crona;
    //     catchPhrase: Multi-layered client-server neural-net;
    //     bs: harness real-time e-markets;
    // };
}
