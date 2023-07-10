import { Form, Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row justify="center" className="p-10 text-white bg-[#0F4C7D] w-[850px] max-w-full rounded-md">
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <h1 className="text-center text-3xl font-semibold mb-6">Search Whatever You Need</h1>
        <Form
          name="forget-password-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input search query!' },
              { type: 'text', message: 'Please enter a valid query!' },
            ]}
          >
            <Input placeholder="Enter Search Query" className='py-3' />
          </Form.Item>

          <Form.Item>
            <Button className='bg-orange-600 border-0 py-3 text-lg h-auto text-white flex justify-center items-center' htmlType="submit" block>
              Search <FaSearch className='ml-2'/>
            </Button>
          </Form.Item>
        </Form>

        <div className="flex justify-center items-center">
            <p className="text-sm">
                Go Back{' '}
                <Link
                    className="inline-block align-baseline text-sm text-orange-600 hover:text-white"
                    to="/admin/dashboard"
                >
                    Dashboard
                </Link>
            </p>
        </div>
      </Col>
    </Row>
  );
};

export default SearchForm;
