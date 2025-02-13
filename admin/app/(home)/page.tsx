"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, Users, Calendar, BookOpen } from 'lucide-react';

const HomePage = () => {
  // Sample data - in a real app this would come from your API
  const analyticsData = [
    { month: 'Jan', applications: 450, events: 15, downloads: 280 },
    { month: 'Feb', applications: 520, events: 18, downloads: 350 },
    { month: 'Mar', applications: 480, events: 20, downloads: 310 },
    { month: 'Apr', applications: 600, events: 22, downloads: 420 },
    { month: 'May', applications: 750, events: 25, downloads: 480 }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'Application',
      title: 'Computer Science Application',
      status: 'Pending',
      date: '2025-02-10'
    },
    {
      id: 2,
      type: 'Event',
      title: 'Spring Career Fair',
      status: 'Upcoming',
      date: '2025-02-15'
    },
    {
      id: 3,
      type: 'Story',
      title: 'Student Research Success',
      status: 'Published',
      date: '2025-02-09'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">University Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Admin</span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold">2,800</p>
                  <p className="text-sm text-green-500">+12.5% from last month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Calendar className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-600">Active Events</p>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-sm text-green-500">+3 this week</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <BookOpen className="h-8 w-8 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-600">Student Clubs</p>
                  <p className="text-2xl font-bold">56</p>
                  <p className="text-sm text-blue-500">2 pending approval</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Download className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Downloads</p>
                  <p className="text-2xl font-bold">1,480</p>
                  <p className="text-sm text-green-500">+8.3% from last month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="applications" fill="#4F46E5" name="Applications" />
                  <Bar dataKey="events" fill="#7C3AED" name="Events" />
                  <Bar dataKey="downloads" fill="#10B981" name="Downloads" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="py-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.type} • {activity.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    activity.status === 'Published' ? 'bg-green-100 text-green-800' :
                    activity.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;