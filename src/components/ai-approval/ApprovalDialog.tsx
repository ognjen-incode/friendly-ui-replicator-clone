
import React, { useState } from "react";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalContent from "./ApprovalContent";
import ApprovalFooter from "./ApprovalFooter";
import ApprovalButtons from "./ApprovalButtons";
import { toast } from "sonner";

interface ApprovalDialogProps {
  title?: string;
  description?: string;
  actionText?: string;
  timeLimit?: string;
}

const ApprovalDialog: React.FC<ApprovalDialogProps> = ({
  title = "Approve AI agent access",
  description = "An AI agent requested access to Multiwallet services on your behalf to perform an action. If you approve, they will be able to:",
  actionText = "Send $500 to Roman Karachinsky",
  timeLimit = "15 min",
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleApprove = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Access approved for 15 minutes");
      setIsProcessing(false);
    }, 1000);
  };

  const handleDeny = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      toast.info("Access request denied");
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="border border-[color:var(--Background-Light-Gray,#E9E9EB)] max-w-[800px] w-full overflow-hidden bg-white rounded-lg border-solid">
      <ApprovalHeader />
      <ApprovalContent
        title={title}
        description={description}
        actionText={actionText}
        timeLimit={timeLimit}
      />
      <ApprovalButtons onApprove={handleApprove} onDeny={handleDeny} />
      <ApprovalFooter />
    </div>
  );
};

export default ApprovalDialog;
