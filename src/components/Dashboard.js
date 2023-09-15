
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';


const Dashboard = () => {
  return (
    <>
  <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Dashbard" title="Dashboard">
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
           <th>Product No</th>
            <th> Quantity</th>
            </tr>
         </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dog dolls</td>
            <td>34C</td>
            <td>140</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tables&Chairs</td>
            <td>56Q</td>
            <td>257</td>
             </tr>
             <tr>
            <td>3</td>
            <td>Shoes</td>
            <td>78L</td>
            <td>289</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Cricket Bats</td>
            <td>42D</td>
            <td>51</td>
             </tr>
             <tr>
            <td>5</td>
            <td>Remote cars</td>
            <td>74T</td>
            <td>70</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Pencil box</td>
            <td>96R</td>
            <td>265</td>
             </tr>
          </tbody>
      </Table>
      </Tab>
      <Tab eventKey="Information" title="Information">
      <div className="container">
                <h3>Information</h3>
                <p>This application is a simple inventory management system. 
                    It interacts with an API to access a live database so the information modified, created, or deleted on this application will impact the database. Feel free to mess around with the application in anyway you feel like.
                    Using the above links in the navigation bar will allow you to interact with the various functions of this application. What each page does is described below.
                    <br/><b>Note*</b> When there are more than 5 items in the inventory list, every table will have pagination enabled allowing you to use the previous/next buttons to view the inventory list in 5 item increments.

                    <br/><br/><b>Inventory:</b> Shows the name of items in inventory and their current quantity.
                    <br/><b>Restock/Use:</b> Change quantity of items in inventory by entering the amount and pressing the restock/use buttons.
                    <br/><b>Create Items:</b> Fill in the respective item information and press the create button to add new items to the inventory list.
                    <br/>
                </p>
               
                <footer style={{marginTop:"70px"}}>
                </footer>
            </div>
      </Tab>
      <Tab eventKey="Inventory" title="Inventory" >
        <h1>Inventory</h1>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name of Items</th>
            <th>Current Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dog dolls</td>
            <td>120</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tables&Chairs</td>
            <td>250</td>
             </tr>
             <tr>
            <td>3</td>
            <td>Shoes</td>
            <td>250</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Cricket Bats</td>
            <td>54</td>
             </tr>
             <tr>
            <td>5</td>
            <td>Remote cars</td>
            <td>67</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Pencil box</td>
            <td>256</td>
             </tr>
          </tbody>
      </Table>
      </Tab>
      <Tab eventKey="Restock/use" title="Restock/use" >
      <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridid">
          <Form.Label>Id</Form.Label>
          <Form.Control type="number" placeholder="Enter Id no" />
        </Form.Group> 

        <Form.Group as={Col} controlId="formGridProductEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Name" />
        </Form.Group>

       
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridProductNo">
          <Form.Label>ProductNo</Form.Label>
          <Form.Control type="ProductNo" placeholder="ProductNo" />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridProductAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="Enter Amount" />
        </Form.Group>
        

        </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Tab>
      <Tab eventKey="Create-items" title="Create-items" >

        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProductEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridProductNo">
          <Form.Label>ProductNo</Form.Label>
          <Form.Control type="ProductNo" placeholder="ProductNo" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control placeholder="12" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formGridMobile">
        <Form.Label>Mobile No </Form.Label>
        <Form.Control placeholder="Enter mobile no" />
      </Form.Group>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control />
        </Form.Group>
      
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      

       <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                
      </Tab>
      
    </Tabs>
   
   
    </>
  )
}

export default Dashboard
