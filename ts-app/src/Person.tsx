// import {useState} from 'react';

interface Props {
	name: string,
	email: string,
	age: number,
	isMarried?: boolean,
	courses: string[],
	country: Country,
};

export enum Country {
	Iran = 'Iran',
	Afghanistan = 'Afghanistan',
	Turkamanistan = 'Turkamanistan',
}

export const Person = (props: Props) => {
	// const [name, setName] = useState<string>();
	// setName('Nima')
	return (
			<div>
				<h1>Name: {props.name}</h1>
				<h2>Email: {props.email}</h2>
				<h2>Age: {props.age}</h2>
				<h3>Married: {props.isMarried ? 'yes' : 'No'}</h3>
				{props.courses.map((course: string) => {
					return <h4 key={course}>{course}</h4>
				})}
				<h4>{props.country}</h4>
			</div>
		   );
};
