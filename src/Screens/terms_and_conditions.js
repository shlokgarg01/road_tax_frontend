import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Heading from '../Components/heading';

const TermsAndCondition = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{padding: 10, flex: 1}}
        contentContainerStyle={{paddingBottom: 20}}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
            marginBottom: 5,
          }}>
          Terms and Conditions for Road Tax Seva
        </Text>
        <View style={styles.container}>
          <Text style={styles.text}>
            These terms and conditions ("Terms") govern your use of the Road Tax
            Seva, provided by Krishna Motors, a incorporated under the laws ,
            with its registered office. By using the Application, you agree to
            comply with these Terms. If you do not agree with these Terms,
            please refrain from using the Application.
          </Text>
        </View>
        <Heading title="1. Acceptance of Terms" />
        <View style={styles.container}>
          <Text>
            By accessing or using the Application, you acknowledge that you have
            read, understood, and agree to be bound by these Terms and any
            applicable laws and regulations. You also agree to our Privacy
            Policy, which is incorporated into these Terms by reference.
          </Text>
        </View>
        <Heading title="2. Use of the Application" />
        <View style={styles.container}>
          <Text style={styles.text}>
            2.1. Eligibility: You must be of legal age and have the legal
            capacity to use the Application. If you are using the Application on
            behalf of an organization, you represent and warrant that you have
            the authority to bind the organization to these Terms.
          </Text>
          <Text style={styles.text}>
            2.2. License: We grant you a limited, non-exclusive,
            non-transferable, revocable license to use the Application for its
            intended purpose, subject to these Terms.
          </Text>
        </View>
        <Heading title="3. User Responsibilities" />
        <View style={styles.container}>
          <Text style={styles.text}>
            3.1. Account: You may be required to create an account to access
            certain features of the Application. You are responsible for
            maintaining the confidentiality of your account credentials and for
            all activities that occur under your account.
          </Text>
          <Text style={styles.text}>
            3.2. Compliance: You agree to use the Application in compliance with
            all applicable laws, regulations, and these Terms. You will not use
            the Application for any unlawful or prohibited purposes.
          </Text>
        </View>
        <Heading title="4. Fees and Payment" />
        <View style={styles.container}>
          <Text style={styles.text}>
            If applicable, you agree to pay any fees associated with the use of
            the Application as specified in the pricing or fee schedule provided
            by Krishna Motors.
          </Text>
        </View>
        <Heading title="5. Privacy" />
        <View style={styles.container}>
          <Text style={styles.text}>
            We collect and process personal data in accordance with our Privacy
            Policy. By using the Application, you consent to such data
            processing.
          </Text>
        </View>
        <Heading title="6. Termination" />
        <View style={styles.container}>
          <Text style={styles.text}>
            We reserve the right to terminate or suspend your access to the
            Application at our discretion, without notice, for any reason,
            including but not limited to a breach of these Terms.
          </Text>
        </View>
        <Heading title="7. Intellectual Property" />
        <View style={styles.container}>
          <Text style={styles.text}>
            All intellectual property rights related to the Application are
            owned by or licensed to Krishna Motors. You may not reproduce,
            distribute, or create derivative works from the Application without
            our express permission.
          </Text>
        </View>
        <Heading title="8. Limitation of Liability" />
        <View style={styles.container}>
          <Text style={styles.text}>
            To the extent permitted by law, [Your Company Name] shall not be
            liable for any direct, indirect, incidental, special, or
            consequential damages arising from your use of the Application.
          </Text>
        </View>
        <Heading title="9. Changes to Terms" />
        <View style={styles.container}>
          <Text style={styles.text}>
            We may update these Terms from time to time. It is your
            responsibility to review these Terms regularly. Your continued use
            of the Application after any changes signifies your acceptance of
            the updated Terms.
          </Text>
        </View>
        <Heading title="10. Governing Law and Jurisdiction" />
        <View style={styles.container}>
          <Text style={styles.text}>
            These Terms shall be governed by and construed in accordance with
            the laws. Any disputes arising from or related to these Terms shall
            be subject to the exclusive jurisdiction of the courts.
          </Text>
        </View>
        <Heading title="11. Contact Information" />
        <View style={styles.container}>
          <Text style={styles.text}>
            If you have any questions or concerns about these Terms or the
            Application, please contact us.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {textAlign: 'justify', paddingBottom: 5},
  container: {paddingHorizontal: 17},
});

export default TermsAndCondition;
