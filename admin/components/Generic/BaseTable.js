import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function BaseTable({ data, title, headers }) {
  if(!data || data.length == 0) return (<></>)
  console.log(data)
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
            { headers.map((item, key) => <th scope="col" key={key}>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          { data.map((entry, entryKey) => {
            return (
              <tr key={entryKey}>
                { headers.map((header, key) => {
                  return (
                    <td key={key}>{entry[header]}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Card>
  )
}