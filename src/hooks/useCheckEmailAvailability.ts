import axios from "axios";
import { useState } from "react";

type TStatus = "idle" | "checking" | "available" | "inAvailable" | "failed";

const useCheckEmailAvailability = () => {
  const [emailAvailabilityStatus, setEmailAvailabilityStatus] =
    useState<TStatus>("idle");
  const [enteredEmail, setEnteredEmail] = useState<null | string>(null);

  const checkEmailAvailability = async (email: string) => {
    setEnteredEmail(email);
    setEmailAvailabilityStatus("checking");
    try {
      const response = await axios.get(`/users?email=${email}`);
      if (!response.data.length) {
        setEmailAvailabilityStatus("available");
      } else {
        setEmailAvailabilityStatus("inAvailable");
      }
    } catch (error) {
      setEmailAvailabilityStatus("failed");
    }
  };
  const resetCheckEmailAvailability = () => {
    setEnteredEmail(null);
    setEmailAvailabilityStatus("idle");
  };
  return {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  };
};

export default useCheckEmailAvailability;
