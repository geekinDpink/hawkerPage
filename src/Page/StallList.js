import React, { useEffect, useState } from "react";
import {Formik, Form, Field } from "formik";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {getAllStall} from '../Service/FirestoreHelper';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import StallCard from "../Component/Card/StallCard";
import Select from 'react-select'
import Modal from 'react-bootstrap/Modal';
import StallDetailModal from "../Component/Modal/StallDetailModal";
//import * as yup from 'yup';

export default function StallList(){

    //Store Stall Data from Firestore, extracted once
    const [stallData, setStallData] = useState([]);
    
    //For pagination
    const [currentPage, setCurrentPage] = useState([1]);
    const [stallPerPage, setStallPerPage] = useState([5]);
    const [totalpg, setTotalpage] = useState(0);

    //Filter Stall Data
    const [filteredStallData, setfilteredStallData] = useState([]);

    //For search bar
    const [searchInput, setSearchInput] = useState("Default Text");

    //For Modal
    const [show, setShow] = useState(false);
    const [modalStall, setModalStall] = useState();
    const handleClose = () => setShow(false);
    function handleShow(){setShow(true);}
    function handleStall(stall) {setModalStall(stall);}
    const stallCardClickHandler = (stall) => {
        handleShow();
        handleStall(stall);
    };

    const categoryOptions = [
        { value: 'Snack', label: 'Snack' },
        { value: 'Rice', label: 'Rice' },
        { value: 'Pastry', label: 'Pastry' },
        { value: 'Noodle', label: 'Noodle' },
        { value: 'Beef', label: 'Beef' },
        { value: 'Congee', label: 'Congee' },
        { value: 'Pastry', label: 'Pastry' },
        { value: 'Dessert', label: 'Dessert' },
        { value: 'Vegetrian', label: 'Vegetrian' },
        { value: 'Drinks', label: 'Drinks' }
    ];

    //For Select Drop-down
    /*
    const [selectedCat, setSelectedCat] = useState([]);
    const handleSelected = (category) => {
        setSelectedCat(category);
        selectedCat.map(cat => console.log(cat));
    }
    */

    useEffect(async () =>
        {
            const allStall = await getAllStall();
            //  allStall.map((stall) =>{console.log(stall.stallname);});
            setStallData(allStall);
            setSearchInput("");
            //await setTotalpage(Math.ceil(stallData.length/stallPerPage));
            //await console.log("Total Page"+ totalpage);
        },[]
    );

    //setState is async, whenever state is updated, component is rerender. To prevent delay in console.log of char by 1.
    useEffect(()=> {
        // console.log(searchInput);
        if(searchInput===""){
            setfilteredStallData(stallData);
        }
        else {
            let newStallData = stallData.filter((stall) => 
                {
                    return stall.stallname.toLowerCase().includes(searchInput.toLowerCase())
                }
            );
            setfilteredStallData(newStallData);
        }
        allStallInPage = filteredStallData;
        // await setTotalpage(Math.ceil(stallData.length/stallPerPage));
        //console.log(allStallInPage);
    }
    , [searchInput]);
    

    //pagination function, based on current page, generate the relevant stalls
    const lastStallIndex = currentPage * stallPerPage;
    const firstStallIndex = lastStallIndex - stallPerPage;
    let allStallInPage = filteredStallData.slice(firstStallIndex, lastStallIndex);

    function NavToPageNo(newPageNo)
    {
        setCurrentPage(newPageNo);
    }


    //ceil round up to nearest integer
    const totalpage = Math.ceil(filteredStallData.length/stallPerPage);

    function RenderPageNumber()
    {
        const pageList = [];

        for(let i=1; i<=totalpage; i++) { pageList.push(i); }

        return (
            <nav>
                <ul>
                    {
                        pageList.map(page => 
                        <li key={page} style={{float:"left", listStyleType:"none"}} onClick={()=> NavToPageNo(page)}>
                            <a style={{display:"block", padding:"10px", fontSize:"large"}} id="pageNumber"> {page} </a>
                        </li>
                        )
                    }
                </ul>
            </nav>);
    }
    
    function searchFilter(event)
    {
        if(searchInput===""){
            setfilteredStallData(stallData);
        }
        else {
            let newStallData = stallData.filter((stall) => 
                {
                    stall.stallname.toLowerCase().includes(searchInput.toLowerCase())
                }
            );
            setfilteredStallData(newStallData);
        }
    }

    return(
        <>
            <Container>
                <Row style={{background:"#ffece4"}}>
                    {/*<button onClick={getAllStall}>All stalls' name</button>*/}
                    <Formik
                        onSubmit={async (values)=>
                            {
                                await getAllStall();
                            }
                        }
                    >
                        <Form>
                            <Container style={{marginLeft:"auto", marginRight:"auto", width:"50%",marginTop:"20px", marginBottom:"20px"}}>
                                <Row style={{marginLeft:"0px", paddingLeft:"0px", marginTop:"8px"}}>
                                    <Col md={12}>
                                        <Field 
                                        id="searchStall"
                                        name="searchStall"
                                        placeholder = "Search for stalls"
                                        onChange = {(e) => {
                                            setSearchInput(e.target.value); 
                                            // console.log(searchInput);
                                            // searchFilter(e);
                                        }}
                                        style={{width:"60%"}}
                                        />
                                    </Col>
                                </Row>
                            {/*
                                    <Row style={{marginLeft:"0px", paddingLeft:"0px", marginTop:"8px"}}>
                                    <Col md={2}>
                                        <Field 
                                            id="categories"
                                            name="categories"
                                            as="select">
                                                <option value="Breads">Breads</option>
                                                <option value="Dessert">Dessert</option>
                                                <option value="Drinks">Drinks</option>
                                                <option value="Western">Western</option>
                                        </Field>
                                    </Col>
                                    <Col md={3}>
                                        <Field 
                                            id="payment"
                                            name="payment"
                                            as="select">
                                                <option value="Cash">Cash</option>
                                                <option value="Credit Cards">Credit Cards</option>
                                                <option value="Others">Others</option>
                                        </Field>
                                    </Col>

                                    <Col md={4}>
                                        <button type="submit">Get All Stalls</button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Select options={categoryOptions} isMulti/>
                                    </Col>
                                </Row>
                            */}
                            </Container>
                        </Form>
                    </Formik>
                </Row>

                <Row style={{background:"#FFFFF0", paddingLeft:"1%", paddingRight:"1%"}}>
                    {
                        modalStall && <StallDetailModal stall={modalStall} handleClose={handleClose} show={show}/>
                        // <StallDetailModal stall={modalStall} handleClose={handleClose} show={show}/>
                    }
                    {
                        allStallInPage.map((stall) =>
                            {
                                // return <h1>{stall.stallname}</h1>
                                return(
                                    <>
                                        <StallCard stall={stall} handleShow={handleShow} key={stall.stallname} setModalStall={setModalStall}/>
                                    </>
                                    
                                   /*
                                    <>
                                        <Card className="stallCard" key={stall.stallname} style={{width:"31%", margin:"1.1%"}} onClick={handleShow}>
                                            <Card.Img src={stall.stallpic} alt="Card image" style={{height:"60%"}}/>
                                            <Card.Body className="stallBody">
                                                <Card.Title>{stall.stallname}</Card.Title>
                                                <Card.Text className="stallText">{stall.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </>
                                    */
                                    /*
                                    <>
                                    <Card className="stallCard" key={stall.stallname} style={{width:"31%", margin:"1.1%"}}>
                                        <Card.Img src={stall.stallpic} alt="Card image" style={{height:"60%"}}/>
                                        <Card.Body className="stallBody">
                                            <Card.Title>{stall.stallname}</Card.Title>
                                            <Card.Text className="stallText">{stall.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </>
                                    */
                                    /*
                                        <Modal
                                            show={show}
                                            onHide={handleClose}
                                            backdrop="static"   
                                            keyboard={false}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{stall.stallname}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div><img src={stall.stallpic}/></div>
                                                <p>{stall.description}</p>
                                                <p>{stall.category}</p>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <button onClick={handleClose}>
                                                    Close
                                                </button>
                                            </Modal.Footer>
                                        </Modal>
                                    */

                                );
                            }
                        )
                    }
                </Row>
                <Row>
                    <Col>
                        <RenderPageNumber />
                    </Col>
                </Row>
                <Row>
                    {/*
                    <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"   
                    keyboard={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                    </Modal.Body>
                    <Modal.Footer>
                    <button onClick={handleClose}>
                        Close
                    </button>
                    <button >Understood</button>
                    </Modal.Footer>
                </Modal>*/}
                </Row>



            </Container>
        </>
    );
}