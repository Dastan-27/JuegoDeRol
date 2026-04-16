import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (e : { preventDefault: () => void }) => {
        e.preventDefault();
        localStorage.setItem("token", "fake");
        navigate("/acertijo");


};
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <h2 className="text-5xl font-semibold mb-6 text-start text-white">Inicia sesión</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Nombre de detective"
                    className="border border-purple-900 bg-gray-900 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="border border-purple-900 bg-gray-900 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                    type="submit"
                    className="bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition-colors"
                >
                    Comenzar
                </button>
            </form>
        </div>
    );
};