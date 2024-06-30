// PascalCasing
function Message() {
    // JSX: Javascript XML - this code will be compiled to js
    const name = "Adam";
    if (name)
        return <h1>Hello {name}</h1>;
    else
        return <h1>Hello world</h1>
}

export default Message;