import React from "react";
import { Router, useRouter } from 'next/router';
import {
  Button,
  Card,
  CardHeader,
  Table,
  Row,
} from "reactstrap";

export default function BaseTable({ data, title, headers, service }) {
  const router = useRouter()

  if(!data || data.length == 0) return (<>
    <Card className="shadow">
      <CardHeader className="border-0">
        <Row className="align-items-center">
          <div className="col">
            <h3 className="mb-0">No hay datos.</h3>
          </div>
        </Row>
      </CardHeader>
    </Card>
  </>)


  if(!headers || headers.length == 0) {
    headers = []
    for(let prop in data[0]) {
      headers.push(prop)
    }
  }

  const ignoreHeaders = ['_id', '__v']
  
  for(let item of ignoreHeaders) {
    console.log(item)
    let index = headers.indexOf(item);
    if (index > -1) {
      headers.splice(index, 1);
    }
  }

  const getValue = (item) => {
    if(typeof(item) == 'boolean') {
      return item ? 'Si' : 'No'
    }

    return item
  }

  const destroy = async (id) => {
    await service.delete(id)
  } 

  return (
    <Card className="shadow">
      <CardHeader className="border-0">
        <Row className="align-items-center">
          <div className="col">
            <h3 className="mb-0">{title}</h3>
          </div>
        </Row>
      </CardHeader>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            { headers.map((item, key) => <th scope="col" key={key}>{item.replace('_', ' ')}</th>)}
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          { data.map((entry, entryKey) => {
            return (
              <tr key={entryKey}>
                { headers.map((header, key) => {
                  return (
                    <td key={key}>
                      { getValue(entry[header]) }
                    </td>
                  )
                })}
                <td>
                  <Button 
                    color="info" 
                    type="button" 
                    size="sm"
                    onClick={e => router.replace(`${router.pathname}/${entry._id}`)}>
                    Editar
                  </Button>
                </td>
                <td>
                  <Button 
                    color="danger" 
                    type="button" 
                    size="sm"
                    onClick={e => destroy(entry._id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Card>
  )
}