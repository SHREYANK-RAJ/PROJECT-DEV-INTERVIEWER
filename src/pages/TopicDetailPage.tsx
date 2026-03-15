import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUp, ArrowDown, MessageSquare, Plus, ArrowLeft } from 'lucide-react';
import { getTopicBySlug, getQuestionsByTopicId } from '../mockData';
import Modal from '../components/Modal';

export default function TopicDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const topic = getTopicBySlug(slug || '');
  const questions = topic ? getQuestionsByTopicId(topic.id) : [];

  if (!topic) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Topic not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Question submitted! (This is a mock submission)');
    setIsModalOpen(false);
    setTitle('');
    setContent('');
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

      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {topic.name}
            </h1>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{questions.length} questions</span>
              <span>•</span>
              <span>Active community</span>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium"
          >
            <Plus className="w-5 h-5" />
            <span>Submit Question</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <Link
            key={question.id}
            to={`/question/${question.id}`}
            className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-all"
          >
            <div className="flex space-x-4">
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <button className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-blue-600 transition-colors">
                  <ArrowUp className="w-5 h-5" />
                </button>
                <span className="font-semibold text-gray-900">
                  {question.upvotes - question.downvotes}
                </span>
                <button className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-red-600 transition-colors">
                  <ArrowDown className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {question.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {question.preview}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{question.answerCount} answers</span>
                    </div>
                    <span>•</span>
                    <span>Asked by {question.author}</span>
                  </div>
                  <span>{question.createdAt}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Submit a New Question"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., How to implement binary search in JavaScript?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question Details
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Provide detailed description of the interview question..."
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              required
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Submit Question
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
