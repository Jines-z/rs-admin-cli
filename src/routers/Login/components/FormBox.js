import React, {Component} from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item

class FromBox extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<span className='font icon-user' style={{ color: 'rgba(0,0,0,.25)' }}></span>} placeholder="admin" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<span className='font icon-mima' style={{ color: 'rgba(0,0,0,.25)' }}></span>} type="password" placeholder="123456" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(FromBox);