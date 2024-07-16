import React, { useEffect } from "react";
import { authorize } from "zmp-sdk/apis";

const AuthorizationComponent: React.FC<{
  onSuccess: () => void;
  onFailure: () => void;
}> = ({ onSuccess, onFailure }) => {
  useEffect(() => {
    const handleAuthorize = async () => {
      try {
        await authorize({
          scopes: ["scope.userInfo"],
          success: onSuccess,
          fail: onFailure,
        });
      } catch (error) {
        console.error("Failed to authorize:", error);
        onFailure();
      }
    };

    handleAuthorize();
  }, [onSuccess, onFailure]);

  return null;
};

export default AuthorizationComponent;
