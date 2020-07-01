import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Card, MessageModalLayout, Checkbox, Text} from 'wix-style-react';

function text(children) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,.1)',
                width: '100%',
                height: '50px',
            }}
            children={children}
        />
    );
}

const App = () => {

    return (
        <div>
            <Container>
                <Row>

                    <MessageModalLayout
                        primaryButtonText="Leave"
                        secondaryButtonText="Cancel"
                        title="Discard changes"
                        sideActions={<Checkbox>Don't show this again</Checkbox>}
                        onCloseButtonClick={() => {
                        }}
                    >
                        <Text>
                            Are you sure you want to leave this page? Your changes won't be saved.
                        </Text>
                    </MessageModalLayout>
                    <Col span={8}>
                        <Card>
                            <Card.Header subtitle="Card Subtitle" title="Card Header"/>
                            <Card.Divider/>
                            <Card.Content>
                                <Container fluid>
                                    <Row>
                                        <Col span={4}>{text('<Col span={4}/>')}</Col>
                                        <Col span={4}>{text('<Col span={4}/>')}</Col>
                                        <Col span={4}>{text('<Col span={4}/>')}</Col>
                                    </Row>

                                    <Row>
                                        <Col span={6}>{text('<Col span={6}/>')}</Col>
                                    </Row>

                                    <Row>
                                        <Col span={6}>{text('<Col span={6}/>')}</Col>
                                        <Col span={3}>{text('<Col span={3}/>')}</Col>
                                        <Col span={3}>{text('<Col span={3}/>')}</Col>
                                    </Row>
                                </Container>
                            </Card.Content>
                        </Card>
                    </Col>

                    <Col span={4}>
                        <Card>
                            <Card.Header title="Side Card"/>
                            <Card.Divider/>
                            <Card.Content>
                                <Container fluid>
                                    <Row>
                                        <Col span={12}>{text('<Col span={12}/>')}</Col>
                                    </Row>
                                    <Row>
                                        <Col span={6}>{text('<Col span={6}/>')}</Col>
                                        <Col span={6}>{text('<Col span={6}/>')}</Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>{text('<Col span={12}/>')}</Col>
                                    </Row>
                                </Container>
                            </Card.Content>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Card>
                            <Card.Header title="Full width Card"/>
                            <Card.Divider/>
                            <Card.Content>
                                <Container fluid>
                                    <Row>
                                        <Col span={4}>{text('<Col span={4}/>')}</Col>
                                        <Col span={4}>{text('<Col span={4}/>')}</Col>
                                        <Col span={4}>{text('<Col span={4}/>')}</Col>
                                    </Row>
                                </Container>
                            </Card.Content>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const root = document.getElementById('root');
console.log(root);

ReactDOM.render(
    <App/>,
    root,
);

