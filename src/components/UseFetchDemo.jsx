import { useFetch } from "../hooks/useFetch";

function UseFetchDemo() {
	const { data, error, isLoading, refetch } = useFetch(
		"https://jsonplaceholder.typicode.com/posts"
	);
	console.log('2',new URLSearchParams({ _limit: 3}).toString());
	return (
		<div>
			<div>
				<button
					onClick={() =>
						refetch({
							params: {
								_limit: 3,
							},
						})
					}
				>
					Перезапросить
				</button>
			</div>
			{isLoading && "Загрузка..."}
			{error && "Произошла ошибка"}
			{data &&
				!isLoading &&
				data?.map((item) => <div key={item.id}>{item.title}</div>)}
		</div>
	);
}

export default UseFetchDemo;
