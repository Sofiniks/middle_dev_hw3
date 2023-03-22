import { useViewportSize } from "../hooks/useViewportSize";

function UseViewportSizeDemo() {
	const { height, width } = useViewportSize();

	return (
		<>
			Width: {width}, height: {height}
		</>
	);
}

export default UseViewportSizeDemo;
