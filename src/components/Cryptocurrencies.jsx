import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

// import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = () => {

  // const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   setCryptos(cryptosList?.data?.coins);

  //   const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

  //   setCryptos(filteredData);
  // }, [cryptosList, searchTerm]);

  // if (isFetching) return <Loader />;

  return (
    <>

      <div className="search-crypto">
        <Input
          placeholder="Search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>

      <Row gutter={[32, 32]} className="crypto-card-container">

        <Col
          xs={24}
          sm={12}
          lg={6}
          className="crypto-card"

        >

          {/* Note: Change currency.id to currency.uuid  */}
          <Link
            to="/cryptoDetails"
          // {`/crypto/${currency.uuid}`}
          >
            <Card
              title={`titulo. name`}
              extra={<img className="crypto-image" src="#" />}
              hoverable
            >
              <p>Price:</p>
              <p>Market Cap: </p>
              <p>Daily Change: %</p>
            </Card>
          </Link>
        </Col>
        <Col
          xs={24}
          sm={12}
          lg={6}
          className="crypto-card"

        >

          {/* Note: Change currency.id to currency.uuid  */}
          <Link
            to="#"
          // {`/crypto/${currency.uuid}`}
          >
            <Card
              title={`titulo. name`}
              extra={<img className="crypto-image" src="#" />}
              hoverable
            >
              <p>Price:</p>
              <p>Market Cap: </p>
              <p>Daily Change: %</p>
            </Card>
          </Link>
        </Col>

      </Row>
    </>
  );
};

export default Cryptocurrencies;
