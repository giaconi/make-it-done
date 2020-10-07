class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :duration, :done, :list_id, :created_at
end
