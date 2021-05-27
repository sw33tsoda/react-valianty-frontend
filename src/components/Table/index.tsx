
const TableItem = (itemObj:any,index:number) : JSX.Element => (
    <tr key={index}>
        <td>{itemObj.id}</td>
        <td>{itemObj.description}</td>
        <td>{itemObj.created_at}</td>
        <td>{itemObj.expiration_date}</td>
    </tr>
);

export default function Table<ListType>(props:any) : JSX.Element {
    const data:ListType = props.data;
    console.log(data);
    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nội dung</td>
                        <td>Ngày thêm</td>
                        <td>Hạn</td>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && data.map(TableItem)}
                </tbody>
            </table>
        </div>
    );
}