import { FormEvent, useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import "./Signup.css";

const Signup = () => {
  //const [name,setName]=useState("");
  //const [email,setEmail]=useState("")
  //const [password,setPassword]=useState("")
  //const [address,setAddress]=useState("")

  // const errorMsg:string="";

  const [detailsObject, setDetailsObject] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    address: "",
  });

  const [listOfUsers, setListOfUsers] = useState<
    { name: string; email: string; password: string; address: string }[]
  >([]);

  const [errorMsgName, setErrorMsgName] = useState("");
  const [errorMsgPassword, setErrorMsgPassword] = useState("");

  const [errorMsgEmail, setErrorMsgEmail] = useState("");

  useEffect(() => {
    // console.log("List Of Users")
    // console.log(listOfUsers)
  }, [listOfUsers]);

  const onSubmitForm = (Event: FormEvent<HTMLFormElement>) => {
    Event.preventDefault();
    console.log("Form Submitted");
    let flag = 0;
    //  const newUser={name,email,password,address}
    //  setDetailsObject((prev:{ name:string,email:string,password:string,address:string}[])=>[...prev,newUser])

    // setDetailsObject([...detailsObject,newUser])

    // setDetailsObject({Name:name,Email:email,Password:password,Textarea:textarea})

    //   setListOfUsers([...listOfUsers,detailsObject])

    // console.log(listOfUsers)

    if (detailsObject.name === "") {
      setErrorMsgName("*Required");
    } else {
      setErrorMsgName("");
      flag = flag + 1;
    }

    if (detailsObject.password === "") {
      setErrorMsgPassword("*Required");
    } else {
      setErrorMsgPassword("");
      flag = flag + 1;
    }

    if (detailsObject.email === "") {
      setErrorMsgEmail("*Required");
    } else {
      setErrorMsgEmail("");
      flag = flag + 1;
    }
    if (flag === 3) {
      alert("Submitting the Form Data");

      console.log("Current Registered User");

      console.log(detailsObject);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="m-5">
              <Card.Header className="card-header">Sign Up</Card.Header>
              <Card.Body>
                <Form onSubmit={onSubmitForm}>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Full Name"
                      onBlur={(Event) => {
                        if (Event.target.value === "") {
                          setErrorMsgName("*Required");
                        } else {
                          setErrorMsgName("");
                        }
                      }}
                      onChange={(Event) => {
                        setDetailsObject({
                          ...detailsObject,
                          name: Event.target.value,
                        });
                      }}
                    ></Form.Control>

                    <p style={{ color: "red" }}>{errorMsgName}</p>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      onBlur={(Event) => {
                        if (Event.target.value === "") {
                          setErrorMsgEmail("*Required");
                        } else {
                          setErrorMsgEmail("");
                          setDetailsObject({
                            ...detailsObject,
                            email: Event.target.value,
                          });
                        }
                      }}
                    ></Form.Control>
                    <Form.Text className="text-muted">
                      We will never share your email with anyone else
                    </Form.Text>
                    <p style={{ color: "red" }}>{errorMsgEmail}</p>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      onChange={(Event) => {
                        if (
                          Event.target.value.length >= 8 &&
                          Event.target.value.length <= 14
                        ) {
                          setErrorMsgPassword("");
                          setDetailsObject({
                            ...detailsObject,
                            password: Event.target.value,
                          });
                        } else {
                          setErrorMsgPassword(
                            "*Length of password should be in range of 8-14"
                          );
                        }
                      }}
                    ></Form.Control>
                    <p style={{ color: "red" }}>{errorMsgPassword}</p>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Select Your Gender</Form.Label>
                    <Form.Check
                      type="radio"
                      name="gender"
                      label="Male"
                      value="Male"
                      onChange={(Event) => {
                        setDetailsObject({
                          ...detailsObject,
                          gender: Event.target.value,
                        });
                      }}
                    />
                    <Form.Check
                      type="radio"
                      name="gender"
                      label="Female"
                      value="Female"
                      onChange={(Event) => {
                        setDetailsObject({
                          ...detailsObject,
                          gender: Event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Your Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Door No., Street, Village/Town, District"
                      onChange={(Event) => {
                        setDetailsObject({
                          ...detailsObject,
                          address: Event.target.value,
                        });
                      }}
                    ></Form.Control>
                  </Form.Group>

                  {/*<Form.Group className="mb-3">
    <Form.Label>Select Your State</Form.Label>
    <Form.Select aria-label="Default select example"   >
      <option >Select State</option>
      <option value="AP"  onChange={(Event)=>{

setDetailsObject({...detailsObject,state:(Event.target as HTMLSelectElement).value})

        
    }} >Andhra Pradesh</option>
      <option value="TS">Telangana</option>
      <option value="TN">Tamil Nadu</option>
    </Form.Select>

    </Form.Group>
*/}

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Check me out"
                      id="checkbox"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    {" "}
                    Sign Up{" "}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
