import React from 'react'
import { useState, useEffect } from 'react'
import { Modal, Button, message, Table } from 'antd';
import axios from 'axios';

function Transaction() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transactionsData, setTransactionsData] = useState([])

    const [amount, setAmount] = useState(0)
    const [type, setType] = useState("")
    const [reference, setReference] = useState("")
    const [category, setCategory] = useState("")

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSubmit = async (values) => {
        // values.preventDefault();
        console.log(values)
        try {
            const user = JSON.parse(localStorage.getItem("Tracker"))
            await axios.post('http://localhost:8080/api/v1/transactions/add-transaction', {
                amount, type, reference, category, userid: "1",

            });
            console.log("before get")
            await getTransactions()
            message.success("Transaction added Successfull");
        } catch (error) {
            console.log(error)
        }
    };

    async function getTransactions() {
        try {
            const user = JSON.parse(localStorage.getItem("Tracker"))
            const response = await axios.post('http://localhost:8080/api/v1/transactions/get-all-transactions', { userid: user._id });
            setTransactionsData(response.data)
            console.log("after get")
        }
        catch (error) {
            message.error("something went wrong")
        }
    };
    useEffect(() => {
        getTransactions();
        console.log("inside useEffect")
    }, [])

    const columns = [
        {
            title: "Date",
            dataIndex: "Date"
        },
        {
            title: "Amount",
            dataIndex: "amount"
        },
        {
            title: "Category",
            dataIndex: "category"
        },
        {
            title: "Type",
            dataIndex: "type"
        },
        {
            title: "Reference",
            dataIndex: "reference"
        }
    ]



    return (


        <>
            <div className='Brand'>
                Irine Expense Tracker
            </div>

            <div className="filter d-flex justify-content-between ">
                <Button type="primary" className='transbtn' onClick={showModal}>ADD NEW
                </Button>
            </div>
            <div>
                <div className='analytics'>

                    {transactionsData && <Table columns={columns} datasource={transactionsData} />}


                </div>
                <Modal title="Add Transactions" footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    {/* <form layout="vertical" onSubmit={onSubmit}> */}
                    <div className="form_input">
                        <label htmlFor="amount">Amount</label><br></br>
                        <input type="text" onChange={(e) => setAmount(e.target.value)} value={amount} name="amount" id="amount" />
                    </div>

                    <div className="form_input">
                        <label htmlFor="type">Type</label><br></br>
                        <select class="form-select" onChange={(e) => setType(e.target.value)} value={type} aria-label="Default select example">
                            <option selected></option>
                            <option value="1">Income</option>
                            <option value="2">Expenses</option>
                        </select>
                    </div>
                    <div className="form_input">
                        <label htmlFor="category">Category</label><br></br>
                        <select class="form-select" onChange={(e) => setCategory(e.target.value)} value={category} aria-label="Default select example">
                            <option selected></option>
                            <option value="1">Food</option>
                            <option value="2">Petrol</option>
                            <option value="3">Travel</option>
                            <option value="4">Petrol</option>
                            <option value="5">Monthly grocery</option>
                            <option value="6">Medical</option>
                            <option value="7">Hospital</option>
                            <option value="8">Phone</option>
                        </select>
                    </div>
                    <div className="form_input">
                        <label htmlFor="date">Date</label><br></br>
                        <input type="date" name="date" id="date" />
                    </div>
                    <div className="form_input">
                        <label htmlFor="reference">Reference</label><br></br>
                        <input type="text" onChange={(e) => setReference(e.target.value)} value={reference} name="reference" id="date" />
                    </div>


                    <div className='d-flex justify-content-end'>
                        <button type="submit" onClick={onSubmit}>Save</button>
                    </div>


                    {/* </form> */}

                </Modal>
            </div>
        </>
    )
}

export default Transaction
