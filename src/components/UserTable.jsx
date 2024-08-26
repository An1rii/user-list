
import Table from 'react-bootstrap/Table';
import SearchUser from './SearchUser';


function UserTable({ filter, search }) {
    return (

        <Table striped bordered hover>

            <thead>
            <tr>
                <th>ID</th>
                <th>Favourite</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Image</th>
                <th>Phrase</th>
                <th>Video</th>
            </tr>
            </thead>
            <tbody>
            {filter
                .filter(item => SearchUser(item, search))
                .map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.favourite ? 'true' : 'false'}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                        <td>
                            <img
                                src={`./content/images/${item.image}.jpg`}
                            />
                        </td>
                        <td>{item.phrase}</td>
                        <td>{item.video}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}



export default UserTable;


