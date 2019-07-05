import React from 'react';
import { MDBDataTable } from 'mdbreact';



const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Role ID',
        field: 'role_id',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Phone Number',
        field: 'phone_number',
        sort: 'asc',
        width: 150
      },
    ],
    rows: [
      {
        id: '1',
        role_id: '2',
        name: 'wangxin',
        email: 'wangxinpm1009@gmail.com',
        phone_number: '+8617180968169',
      },
     
  ]
};

return (
 
   <MDBDataTable striped bordered small order={['age', 'asc' ]} data={data} />
  
  );
}

export default DatatablePage;