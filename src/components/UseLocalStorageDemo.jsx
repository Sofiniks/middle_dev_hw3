import { useLocalStorage } from "../hooks/useLocalStorage";

function UseLocalStorageDemo() {
	const [token, { setItem, removeItem }] = useLocalStorage("latvia");

	return (
		<div>
			<p>Твой токен: {token}</p>
			<div>
				<button onClick={() => setItem("newValue")}>Задать токен</button>
				<button onClick={() => removeItem()}>Удалить токен</button>
			</div>
		</div>
	);
}

export default UseLocalStorageDemo;
