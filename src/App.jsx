import { useEffect, useState } from "react"

export default function App() {
    const [subscribing, setSubscribing] = useState(false)
    const [emailValue, setEmailValue] = useState("");
    const [emailCadastrado, setEmailCadastrado] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubscribing(true);
        const emailInput = document.getElementById("email");
        setEmailValue(emailInput.value);
        sessionStorage.setItem("emailInput", emailInput.value)
    };

    const getEmail = () => {
        const verifyEmail = sessionStorage.getItem("emailInput")
        verifyEmail ? setEmailCadastrado(true) : null;
    }

    useEffect(() => {
        getEmail()
    }, [subscribing])

    return (
        <div className="newsletter">
            {
                !subscribing ? (
                    <section>
                        <h1>Stay updated!</h1>
                        <p>Join 60.000+ product managers receiving monthly updates on:</p>
                        <div>
                            <p>Product discovery and building what matter</p>
                        </div>
                        <div>
                            <p>Measuring to ensure updates are a success</p>
                        </div>
                        <div>
                            <p>And much move!</p>
                        </div>
                        {
                            emailCadastrado ? (
                                <div>
                                    <p>Email cadastrado com sucesso!</p>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column" }}>
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" name="email" id="email" required placeholder="email@company.com" />
                                    <input type="submit" value="Subscribe to monthly newsletter" />
                                </form>
                            )
                        }

                    </section>
                ) : (
                    <section>
                        <h1>Thanks for subscribing!</h1>
                        <p>A confirmation email has been sent to <strong>{emailValue}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                        <button type="button" onClick={() => setSubscribing(false)}>Dismiss message</button>
                    </section>
                )
            }
        </div>
    )
}