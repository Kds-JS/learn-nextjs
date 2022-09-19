import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4} from 'uuid';

function listes(props) {

    console.log(props)

    return (
        <div className='container'>
            <h1 className='my-5'>Les listes de vocabulaires</h1>

            <ul className="list-group">
            
            {props.array.map(element => (
                    <li className="list-group-item" key={uuidv4()}>
                        <Link href={`/listes/${element.name}`}>
                            <a>{element.name}</a>
                        </Link>
                    </li>
                )
            )}
                

            </ul>
        </div>
    );
}

export default listes;

export async function getStaticProps(){
    
    const data = await import('/data/listes.json')
    const array = data.englishList

    return {
        props: {
            array
        }
    }
}