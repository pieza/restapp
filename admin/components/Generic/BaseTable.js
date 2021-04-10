import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import {
  Button,
  Card,
  CardHeader,
  Table,
  Row,
  Col,
} from "reactstrap";
import AlertUtil from "../../utils/alert";
import FiltersForm from "./FiltersForm";

export default function BaseTable({ title, headers, service, ignoreProps, doEdit = true, doDelete = true, doDetails }) {
  const router = useRouter()

  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    setData(await service.find())
  }

  const searchCallback = (data) => {
    setData(data)
  }

  useEffect(async () => {
    fetchData();
  }, []);

  if(!headers || headers.length == 0) {
    headers = []
    for(let prop in data[0]) {
      headers.push(prop)
    }
  }

  const ignoreHeaders = ['_id', '__v'].concat(ignoreProps)
  
  for(let item of ignoreHeaders) {
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
    if(await service.delete(id)) {
      AlertUtil.success('Elemento eliminado correctamente.');
    }
    
    fetchData();
  }
  console.log(headers)
  return (
    <Card className="shadow">
      <CardHeader className="border-0">
        <Row className="align-items-center">
          <div className="col">
            <h3 className="mb-0">{title}</h3>
          </div>
        </Row>
        <Row>
          <FiltersForm headers={headers} callback={searchCallback} service={service}/>
        </Row>
      </CardHeader>
      <Table className="align-items-center table-flush" responsive>
        { data && data.length > 0 ? <>
          <thead className="thead-light">
            <tr>
              { headers.map((item, key) => <th scope="col" key={key}>{item.replace('_', ' ')}</th>)}
              { doDetails ? <th>Ver detalles</th> : null }
              { doEdit ? <th>Editar</th> : null }
              { doDelete ? <th>Eliminar</th> : null }
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
                  { doEdit ? <td>
                    <Button 
                      color="info" 
                      type="button" 
                      size="sm"
                      onClick={e => router.replace(`${router.pathname}/${entry._id}`)}>
                      Editar
                    </Button>
                  </td> : null }
                  { doDetails ? <td>
                    <Button 
                      color="info" 
                      type="button" 
                      size="sm"
                      onClick={e => router.replace(`${router.pathname}/${entry._id}`)}>
                      Ver detalles
                    </Button>
                  </td> : null }
                  { doDelete ? <td>
                    <Button 
                      color="danger" 
                      type="button" 
                      size="sm"
                      onClick={e => destroy(entry._id)}>
                      Eliminar
                    </Button>
                  </td> : null }
                </tr>
              )
            })}
          </tbody>
        </> : <Col>No hay datos.</Col> }
      </Table>
    </Card>
  )
}