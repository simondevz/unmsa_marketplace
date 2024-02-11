import { ActionFunction } from "react-router-dom";
import { API_ROUTES, customAxios } from "../../../../api.routes";

const CreateMailAction: ActionFunction = async ({ params, request }) => {
  // Extract form data
  let formData = await request.formData();
  let data = {
    sender: formData.get("sender"),
    receivers: formData.get("receivers"),
    content: formData.get("content"),
  };
  console.log("data ===>>>", data);

  try {
    // Send mail
    // const response = await customAxios
    //   .protected()
    //   .post(API_ROUTES.mailing_services.create, data);

    // Verify email
    const response = await customAxios
      .protected()
      .get(
        API_ROUTES.email_verification.start_process + "?email=" + data.sender
      );
    console.log("response ===>>>", response);
    return { data: response.data };
  } catch (error: any) {
    console.log(error);

    return {
      error:
        error?.response?.data?.detail?.[0]?.ctx?.reason ||
        error?.response?.data?.detail ||
        error.message,
    };
  }
};

export default CreateMailAction;
