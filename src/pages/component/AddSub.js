import axios from "axios"
import { Select, Form, Input, Button, Spin } from "antd"
import { useState, useEffect } from "react"


const { Option } = Select

const AddSub = ({ category, handleDestroy, handleUpdateCount, subLoading, subLoadingOff }) => {




    const handleGet = async () => {
        await axios({
            method: 'GET',
            url: process.env.REACT_APP_API_URL + '/api/subscriptions',
            withCredentials: true,
        })
            .then((res) => {
                console.log(res)
            })

    }

    useEffect(() => {

    }, [])

    const onFinish = async (values) => {
        subLoading()
        let form = new FormData()
        form.append('subCategoryName', values.subCategoryName)


        await axios({
            method: 'POST',
            url: process.env.REACT_APP_API_URL + '/api/subcategory/' + values.categoryID,
            data: form,
            withCredentials: true,
        })
            .then((res) => {

                if (res.status === 200) {
                    subLoadingOff()
                    handleDestroy()
                    handleUpdateCount(res.data)
                }
            })
            .catch((err) => {
                subLoadingOff()
                console.log(err)
            })
            .finally(() => subLoadingOff())
    }


    return (
        <Form onFinish={onFinish}>
            <Form.Item name="categoryID" label="Select Category:"
                rules={[
                    {
                        required: true,
                        message: "Please select a category!",
                    },
                ]} >
                <Select>
                    {
                        category.map((item) => {
                            return (
                                <Option value={item.categoryID}>{item.categoryName}</Option>
                            )
                        })


                    }
                </Select>
            </Form.Item>
            <Form.Item
                name="subCategoryName"
                label="Sub Category Name:"
                rules={[
                    {
                        required: true,
                        message: "Please select the sub category name!",
                    },
                ]}
            >
                <Input placeholder="SubCategory Name" />
            </Form.Item>

            <Form.Item>
                <Button style={{ float: "right" }} htmlType="submit">Add</Button>
            </Form.Item>

        </Form>
    )
}

export default AddSub