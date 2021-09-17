import Button from "./Button";

const chars = [
    "(",
    ")",
    "C",
    ["<="],
    "+",
    "1",
    "2",
    "3",
    ["000"],
    "-",
    "4",
    "5",
    "6",
    ["00"],
    "/",
    "7",
    "8",
    "9",
    "0",
    "*",
    ["==="],
    ["!=="],
    ">",
    "<",
    ".",
    "=",
];

const ButtonCols = () => {
    return (
        <div id="ButtonCols">
            {chars.map((char, i) => (
                <Button key={i} char={char} />
            ))}
        </div>
    );
};

export default ButtonCols;
