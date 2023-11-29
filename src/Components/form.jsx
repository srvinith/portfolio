<Form onSubmit={handleSubmit}
        name='basic' 
        initialValues={{ remember: true }}
        style={{ width: 400, margin: 'auto', marginTop: 50 }}
      >
      
        <Form.Item
          name='name'
          label='name'
          rules={[{ required: true }]}
        >
          <Input
            placeholder='name'
            onChange={(e) => setInputData({...inputData, name: e.target.value})}
          />
        </Form.Item>

        <Form.Item
          name='password'
          label='Password'
          rules={[{ required: true, }]}
        >
          <Input.Password
            placeholder='Password'
          
            onChange={(e) => setInputData({...inputData, password: e.target.value})}
          />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          label='Confirm Password'
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder='Confirm Password'
          
            onChange={(e) => setInputData({...inputData, password: e.target.value})}
          />
        </Form.Item>

     
        <Form.Item name='dob' label='Date of Birth'>
  <DatePicker value={inputData.dob} onChange={(date) => setInputData({ ...inputData, dob: date })} />
</Form.Item>

        <Form.Item
          name='phoneNumber'
          label='Phone Number'
          rules={[{ required: true,  }]}
        >
          <Input
            placeholder='Phone Number'
         
            onChange={(e) => setInputData({...inputData,phoneNumber : e.target.value})}
          />
        </Form.Item>

        <Form.Item name='maritalStatus' label='Marital Status'>
          <Radio.Group
            onChange={(e) => setInputData({...inputData,maritalStatus: e.target.value})}
         
          >
            <Radio value='single'>Single</Radio>
            <Radio value='married'>Married</Radio>
          </Radio.Group>
        </Form.Item>

        
        <Form.Item name='languages' label='Languages'>
  <Checkbox.Group
    options={languageOptions}
    onChange={(values) => setInputData({ ...inputData, languages: values })}
  />
</Form.Item>

        <Form.Item name='gender' label='Gender'>
        <Radio.Group onChange={(e) => setInputData({ ...inputData, gender: e.target.value })} value={inputData.gender}>
            <Radio value='male'>Male</Radio>
            <Radio value='female'>Female</Radio>
        </Radio.Group>
        </Form.Item>

        <Form.Item
          name='email'
          label='Email'
          rules={[
            { required: true, type: 'email' },
          ]}
        >
          <Input
            placeholder='Email'
           
            onChange={(e) => setInputData({...inputData,email:e.target.value})}
          />
        </Form.Item>

        <Form.Item name='address' label='Address'>
          <Input.TextArea
            placeholder='Address'
          
            onChange={(e) => setInputData({...inputData,address:e.target.value})}
          />
        </Form.Item>
        <Button type='primary' htmlType='submit ' className='btn btninfo' onSubmit={handleSubmit}>
           Submit
            </Button>
        </Form>