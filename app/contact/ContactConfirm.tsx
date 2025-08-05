
'use client';

interface ContactConfirmProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    category: string;
    message: string;
  };
  onEdit: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export default function ContactConfirm({ formData, onEdit, onSubmit, isSubmitting }: ContactConfirmProps) {
  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      '転職相談': '転職相談',
      '採用相談': '採用相談',
      'サービスについて': 'サービスについて',
      '料金について': '料金について',
      'その他': 'その他'
    };
    return labels[category] || category;
  };

  return (
    <div className="bg-white rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        送信内容の確認
      </h3>
      
      <div className="space-y-6 mb-8">
        <div className="border-b pb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">お名前</h4>
          <p className="text-gray-900">{formData.name}</p>
        </div>

        <div className="border-b pb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">メールアドレス</h4>
          <p className="text-gray-900">{formData.email}</p>
        </div>

        {formData.phone && (
          <div className="border-b pb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">電話番号</h4>
            <p className="text-gray-900">{formData.phone}</p>
          </div>
        )}

        {formData.company && (
          <div className="border-b pb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">会社名・組織名</h4>
            <p className="text-gray-900">{formData.company}</p>
          </div>
        )}

        <div className="border-b pb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">お問い合わせ種別</h4>
          <p className="text-gray-900">{getCategoryLabel(formData.category)}</p>
        </div>

        <div className="border-b pb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">お問い合わせ内容</h4>
          <p className="text-gray-900 whitespace-pre-wrap">{formData.message}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onEdit}
          disabled={isSubmitting}
          className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-edit-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          内容を修正する
        </button>
        
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <i className="ri-loader-4-line w-5 h-5 flex items-center justify-center mr-2 inline-flex animate-spin"></i>
              送信中...
            </>
          ) : (
            <>
              <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              送信する
            </>
          )}
        </button>
      </div>
    </div>
  );
}
