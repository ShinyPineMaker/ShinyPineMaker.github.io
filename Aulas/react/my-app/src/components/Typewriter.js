import useTypewriter from "./useTypewriter";

const Typewriter = ({ text, speed }) => {
    
    const displayText = useTypewriter("venha estudar na Fatec", 1);

    return (
        <p>{displayText}</p>
    );
};

export default Typewriter;