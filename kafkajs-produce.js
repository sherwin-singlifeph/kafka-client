    import { Kafka } from 'kafkajs';

    async function produceToMsk(brokers, topic, messages) {
      const kafka = new Kafka({
        clientId: 'my-app',
        brokers: brokers // e.g., ['b-1.yourcluster.abc.kafka.us-east-1.amazonaws.com:9092']
      });

      const producer = kafka.producer();
      await producer.connect();
      await producer.send({
        topic: topic,
        messages: messages.map(msg => ({ value: msg }))
      });
      await producer.disconnect();
      console.log('Messages sent successfully!');
    }

    // Call the function with your broker list, topic, and messages
    // Example: produceToMsk(['your-broker-list'], 'my-topic', ['Hello KafkaJS', 'Another message']);


