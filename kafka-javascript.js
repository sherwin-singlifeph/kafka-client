const {
  Kafka,
  ErrorCodes, CompressionTypes, // You can specify additional optional properties for further configuration.
} = require('@confluentinc/kafka-javascript').KafkaJS;


const producer = new Kafka().producer({
    // "auto.commit.interval.ms": "1",
    // "auto.offset.reset": "earliest",
    'bootstrap.servers': "localhost:29092",
    // "enable.auto.commit": "true",
    // "group.id": "PolicyOfferPaymentHandler",
    // "group.id": "PolicyRenewalPaymentHandler",
    // "partition.assignment.strategy": "roundrobin"
});


async function  myFunction(p1, p2) {
  try {
    await producer.connect();
  } catch (ex) {
    console.error("Failed to connect");
    console.error("Messahe: " + ex.message);
  }
  const deliveryReports = await producer.send({
    topic: 'ThunderboltAllEvents',
    messages: [
        // {value: 'v1', key: 'x' },
        {
          // key: "PolicyOfferPaymentHandler",
          // value: Buffer.from('{"id":"0x48f5c4ca6e3cfd0c9f9881fefe0e6762f78c675748637c2cafe97ff5672a78a4","blockId":"0xe7cea12ec9100fbbaa9cb16495a14146c79a9a0e69c0fa4fcfddb949c7e5bcfa","blockNumber":281578,"transactionIndex":0,"createdContractId":null,"status":1,"hasErrors":false,"from":"0x7e255d1438e1aa0fe0fed5c23a93b0993d661b96","to":"0x8e6bf9534bfc02a9fd034077f6e1588a543ffa9c","contractEvent":{"eventEmitter":"0x7eeed583d8156457041b6ec92e9bc99ac8f188e9","eventType":"PolicyUpdated","contractName":"Policy","subjectType":"Policy","msgSender":"0x85ebf9534bfc02a9fd0340e7f6e1588a543ffa9c","subject":"0x8e6bf9534bfc02a9fd034077fee1588a543ffa9c","subjectCreated":false,"payload":"PolicyNumber"}}'),
          // Working format// value: Buffer.from('{"id":"0x48f5c4ca6e3cfd0c9f9881fefe0e6762f78c675748637c2cafe97ff5672a78a4","blockId":"0xe7cea12ec9100fbbaa9cb16495a14146c79a9a0e69c0fa4fcfddb949c7e5bcfa","blockNumber":281578,"transactionIndex":0,"createdContractId":null,"status":1,"hasErrors":false,"from":"0x7e255d1438e1aa0fe0fed5c23a93b0993d661b96","to":"0x8e6bf9534bfc02a9fd034077f6e1588a543ffa9c","contractEvent":{"eventEmitter":"0x7eeed583d8156457041b6ec92e9bc99ac8f188e9","eventType":"PolicyUpdated","contractName":"Policy","subjectType":"Policy","msgSender":"0x85ebf9534bfc02a9fd0340e7f6e1588a543ffa9c","subject":"0x8e6bf9534bfc02a9fd034077fee1588a543ffa9c","subjectCreated":false,"payload":"PolicyNumber"}}'),
          // value: Buffer.from('{"id":"0x48f5c4ca6e3cfd0c9f9881fefe0e6762f78c675748637c2cafe97ff5672a78a4","blockId":"0xe7cea12ec9100fbbaa9cb16495a14146c79a9a0e69c0fa4fcfddb949c7e5bcfa","blockNumber":16515309,"transactionIndex":0,"createdContractId":null,"status":1,"hasErrors":false,"from":"0x7e255d1438e1aa0fe0fed5c23a93b0993d661b96","to":"0x8e6bf9534bfc02a9fd034077f6e1588a543ffa9c","contractEvent":{"eventEmitter":"0x7eeed583d8156457041b6ec92e9bc99ac8f188e9","eventType":"PolicyStateUpdated","contractName":"Policy","subjectType":"Policy","msgSender":"0x85ebf9534bfc02a9fd0340e7f6e1588a543ffa9c","subject":"0x7f54fbda3c783964f4baad4b9ec0a9fa34272591","subjectCreated":false,"payload":"8"}}'),
          
          // Renewal
          key: "PolicyRenewalPaymentHandler",
          value: Buffer.from('{"Id":"0xc172cbfff9d1b0cb5f996aa34d8cf7bf5c391e47a9f739cb95aff41ab5ae0e18","BlockId":"0xf5bce0f6a884ecd9e0ea3eecf9fd057a60b56d8f804c464732d90293378b1d39","BlockNumber":16516232,"TransactionIndex":4,"CreatedContractId":null,"Status":1,"HasErrors":false,"From":"0x6e746d3083a63e1e00de11f6d3ec80b6c311ef38","To":"0x792f3c2d11d5ab0bf928bb0af75d3bf83660174d","ContractEvent":{"EventEmitter":"0xb8470fe268b20308d07f50df49c39ed29378daeb","EventType":"PolicyUpdated","ContractName":"Policy","SubjectType":"Policy","MsgSender":"0x792f3c2d11d5ab0bf928bb0af75d3bf83660174d","Subject":"0x792f3c2d11d5ab0bf928bb0af75d3bf83660174d","SubjectCreated":false,"Payload":"autorenew"}}'),
          
          
        }
    ]
  });

  // deliveryReports.then((value) => {
  //   console.log({value});  
  // });
  console.log({deliveryReports});

  producer.disconnect();
}


Promise.resolve(myFunction());
;

