

describe('Integration API Tests', () => {
  const apiUrl = 'https://qa-api.bugraid.ai/api/v1';
  let grafana, newRelic, pagerDuty, aws;

  before(() => {
    // Load payloads from fixture before tests
    cy.fixture('qapayload').then((payload) => {
      grafana = payload.grafanaPayload; 
      newRelic = payload.newrelicpayload;
      pagerDuty = payload.pagerDutyPayload;
      aws = payload.awsPayload;
    });
  });

  it('Should integrate with Grafana successfully', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/integration/service-alerts/grafana/QT9DGAGJ/vmiUifMn`,
      
      headers: {
        'Content-Type': 'application/json'
      },
      body: grafana
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'OK'); 
    });
  });

 
    
    it('Should integrate with New Relic successfully', () => {
      cy.request({
        method: 'POST',
        url: `${apiUrl}/integration/service-alerts/newrelic/QT9DGAGJ/tjU33rzD`,
        
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          "id": "d1b1f3fd-995a-4066-88ab-8ce4f6960654",
          "issueUrl": "https://radar-api.service.newrelic.com/accounts/1/issues/0ea2df1c-adab-45d2-aae0-042b609d2322?notifier=SLACK",
          "title": "Memory Used % > 90 for at least 2 minutes on 'Some-Entity'",
          "priority": "CRITICAL",
          "impactedEntities": ["logs.itg.cloud", "MonitorTTFB query"],
          "totalIncidents": 42,
          "state": "ACTIVATED",
          "trigger": "INCIDENT_ADDED",
          "isCorrelated": false,
          "createdAt": 1617881246260,
          "updatedAt": 1617881246260,
          "sources": ["newrelic"],
          "alertPolicyNames": ["Policy1", "Policy2"],
          "alertConditionNames": ["condition1", "condition2"],
          "workflowName": "DBA Team workflow"
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'OK');
      });
    });

    it('Should integrate with PagerDuty successfully', () => {
      cy.request({
        method: 'POST',
        url: `${apiUrl}/integration/service-alerts/pagerduty/QT9DGAGJ/SeBD9j-8`,
        
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          "event": {
            "id": "01F53D8PU1AV8L7J2IXL9264Q9",
            "event_type": "incident.annotated",
            "resource_type": "incident",
            "occurred_at": "2024-10-16T07:38:48.191Z",
            "agent": {
              "html_url": "https://dharmnath.pagerduty.com/users/PHF9YS2",
              "id": "PHF9YS2",
              "self": "https://api.pagerduty.com/users/PHF9YS2",
              "summary": "Aryan",
              "type": "user_reference"
            },
            "client": null,
            "data": {
              "incident": {
                "html_url": "https://dharmnath.pagerduty.com/incidents/Q16GF6R130M4EU",
                "id": "Q16GF6R130M4EU",
                "self": "https://api.pagerduty.com/incidents/Q16GF6R130M4EU",
                "summary": "Helo",
                "type": "incident_reference"
              },
              "id": "PJ9TB62",
              "content": "Resolution Note: asd",
              "trimmed": false,
              "type": "incident_note"
            }
          }
        }
      }).then((response) => {
        cy.log('PagerDuty Response:', JSON.stringify(response));
        expect(response.status).to.eq(200);
      });
    });

    it('Should integrate with AWS successfully', () => {
      cy.request({
        method: 'POST',
        url: `${apiUrl}/integration/service-alerts/cloudwatch/QT9DGAGJ/9RDkV6To`,
        
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          "Type": "Notification",
          "MessageId": "f94e835c-8592-5798-8dee-dc04dd394142",
          "TopicArn": "arn:aws:sns:ap-southeast-1:528104389666:BugRaidTopic",
          "Subject": "ALARM: \"node_disk_used(i-007a83a108d6e2c6e)\" in Asia Pacific (Singapore)",
          "Message": "{\"AlarmName\":\"node_disk_used(i-007a83a108d6e2c6e)\",\"AlarmDescription\":null,\"AWSAccountId\":\"528104389666\",\"AlarmConfigurationUpdatedTimestamp\":\"2024-09-09T01:58:09.198+0000\",\"NewStateValue\":\"ALARM\",\"NewStateReason\":\"Threshold Crossed: 1 out of the last 1 datapoints [66.66201000304783 (09/09/24 01:54:00)] was greater than the threshold (30.0) (minimum 1 datapoint for OK -> ALARM transition).\",\"StateChangeTime\":\"2024-09-09T01:59:07.423+0000\",\"Region\":\"Asia Pacific (Singapore)\",\"AlarmArn\":\"arn:aws:cloudwatch:ap-southeast-1:528104389666:alarm:node_disk_used(i-007a83a108d6e2c6e)\",\"OldStateValue\":\"OK\",\"OKActions\":[\"arn:aws:sns:ap-southeast-1:528104389666:BugRaidTopic\"],\"AlarmActions\":[\"arn:aws:sns:ap-southeast-1:528104389666:BugRaidTopic\"],\"InsufficientDataActions\":[\"arn:aws:sns:ap-southeast-1:528104389666:BugRaidTopic\"],\"Trigger\":{\"MetricName\":\"disk_used_percent\",\"Namespace\":\"CWAgent\",\"StatisticType\":\"Statistic\",\"Statistic\":\"AVERAGE\",\"Unit\":null,\"Dimensions\":[{\"value\":\"/\",\"name\":\"path\"},{\"value\":\"i-007a83a108d6e2c6e\",\"name\":\"InstanceId\"},{\"value\":\"xvda1\",\"name\":\"device\"},{\"value\":\"xfs\",\"name\":\"fstype\"}],\"Period\":300,\"EvaluationPeriods\":1,\"DatapointsToAlarm\":1,\"ComparisonOperator\":\"GreaterThanThreshold\",\"Threshold\":30.0,\"TreatMissingData\":\"missing\",\"EvaluateLowSampleCountPercentile\":\"\"}}",
          "Timestamp": "2024-09-09T01:59:07.472Z",
          "SignatureVersion": "1",
          "Signature": "C7i0Zp5lovY8a0F80AtsoHv6yoII+YAzPeKq0vvkD2E2yvYac/W9FstnnzqrQhPF/e8pH4zInBDw3e0F3w8ctiamWnS8jpNHIuo+jN3FATnzWA0BV0eDmhlozNRJndSIafNZNcCtRlA3jmUMHpY46OlN/PmDtIKacvfkvaSNwaWvW3F+KCysqVq640MRI7A/QD0KWN8QiDgmMoEhzUhETMtrZHU5yu2LhThpFne1XOAldegCt+lOgzn5NxbF/NLSlpjV8QPkZa35fwph1rXfQosBQ3NgnNa9fQeOIpaVfj2Z+wcYsXShA8LEQConbiN0FHPmWtogfOOczORcR9lbwQ==",
          "SigningCertURL": "https://sns.ap-southeast-1.amazonaws.com/SimpleNotificationService-60eadc530605d63b8e62a523676ef735.pem",
          "UnsubscribeURL": "https://sns.ap-southeast-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:ap-southeast-1:528104389666:BugRaidTopic:a290580c-353e-4d15-b433-816568796f56"
        }
      }).then((response) => {
        cy.log('AWS Response:', JSON.stringify(response));
        expect(response.status).to.eq(200);
      });
    });
  });
