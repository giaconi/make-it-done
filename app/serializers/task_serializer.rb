class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :description, :duration, :done, :list_id, :created_at
end
