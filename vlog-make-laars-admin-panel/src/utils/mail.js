import axios from 'axios';

/**
 * Get Sender Id By Key Name
 * @returns <Promise>
 */
const getSenderId = () => {
  const senderKeyName = process?.env?.REACT_APP_SENDER_KEY_NAME;
  if (senderKeyName !== 'undefined') {
    return axios.get(`${process.env.REACT_APP_SENDER_URL}`)
      .then(response => { 
          response = response?.data?.data?.filter(
            sender => senderKeyName === sender?.key_name,
        );
          return response?.length > 0 ? response.pop()?.id : '';
      });
  }
};

/**
 * Get Template Id By Name
 * @returns <Promise>
 */
const getTemplateIdByName = (name) => {
  if (name?.length > 0) {
    return axios.get(`${process.env.REACT_APP_TEMPLATE_URL}/name/${name}`)
      .then(response => { 
          return response?.data?.id
      });
  }
};

/**
 * Email is prepared and forwarded from this function
 * @returns <Promise>
 */
const sendEmail = (senderId, templateId, toEmail, placeholders) => {    
  return axios.post(`${process.env.REACT_APP_EMAIL_URL}`, {
    "sender_id": senderId,
    "template_id": templateId,
    "to": [`${toEmail}`,],
    "data": placeholders
  })
    .then(response => { 
        return response?.data
    });
};

/**
 * Email is prepared and forwarded from this function
 * @returns <Promise>
 */
const mail = (templateName, toEmail, placeholders) => {
  if (templateName?.length > 0 && toEmail?.length > 0) {
    return getSenderId().then(senderId => {
      return getTemplateIdByName(templateName).then(templateId => {
        return sendEmail(senderId, templateId, toEmail, placeholders).then(response => {
          return response;
        })
      })
    })
  }
};

export default mail;
