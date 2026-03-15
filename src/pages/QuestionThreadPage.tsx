import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUp, ArrowDown, MessageSquare, ArrowLeft, User } from 'lucide-react';
import { getQuestionById, getAnswersByQuestionId } from '../mockData';

export default function QuestionThreadPage() {
  const { id } = useParams<{ id: string }>();
  const question = getQuestionById(id || '');
  const answers = question ? getAnswersByQuestionId(question.id) : [];
  const [newAnswer, setNewAnswer] = useState('');

  if (!question) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Question not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Answer submitted! (This is a mock submission)');
    setNewAnswer('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to topics
      </Link>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <div className="flex space-x-6">
          <div className="flex flex-col items-center space-y-3 flex-shrink-0">
            <button className="p-2 hover:bg-gray-100 rounded text-gray-500 hover:text-blue-600 transition-colors">
              <ArrowUp className="w-6 h-6" />
            </button>
            <span className="text-2xl font-bold text-gray-900">
              {question.upvotes - question.downvotes}
            </span>
            <button className="p-2 hover:bg-gray-100 rounded text-gray-500 hover:text-red-600 transition-colors">
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {question.title}
            </h1>

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <span>Asked by {question.author}</span>
              <span>•</span>
              <span>{question.createdAt}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span>{question.answerCount} answers</span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {question.content}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {answers.length} {answers.length === 1 ? 'Answer' : 'Answers'}
        </h2>

        <div className="space-y-6">
          {answers.map((answer) => (
            <div
              key={answer.id}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex space-x-4">
                <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                  <button className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-blue-600 transition-colors">
                    <ArrowUp className="w-5 h-5" />
                  </button>
                  <span className="font-semibold text-gray-900">
                    {answer.upvotes - answer.downvotes}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-red-600 transition-colors">
                    <ArrowDown className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1">
                  <div className="prose prose-gray max-w-none mb-4">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {answer.content}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="font-medium text-gray-700">
                        {answer.author}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {answer.createdAt}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Your Answer
        </h3>
        <form onSubmit={handleSubmitAnswer}>
          <textarea
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder="Share your solution, approach, or tips for solving this interview question..."
            rows={8}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-4"
            required
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Be respectful and constructive in your answers
            </p>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Post Answer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
